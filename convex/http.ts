import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("CLERK_WEBHOOK_SECRET environment variable is missing");
      return new Response("Internal Server Error", { status: 500 });
    }

    // Retrieve necessary headers
    const svixId = request.headers.get("svix-id");
    const svixSignature = request.headers.get("svix-signature");
    const svixTimestamp = request.headers.get("svix-timestamp");

    if (!svixId || !svixSignature || !svixTimestamp) {
      console.error("Missing required Svix headers");
      return new Response("Bad Request: Missing required Svix headers", {
        status: 400,
      });
    }

    let payload;
    try {
      payload = await request.json();
    } catch (error) {
      console.error("Failed to parse request JSON:", error);
      return new Response("Bad Request: Invalid JSON payload", { status: 400 });
    }

    const body = JSON.stringify(payload);
    const webhook = new Webhook(webhookSecret);

    let evt: WebhookEvent;
    try {
      evt = webhook.verify(body, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;
    } catch (error) {
      console.error("Error verifying webhook:", error);
      return new Response("Unauthorized: Webhook verification failed", {
        status: 401,
      });
    }

    const eventType = evt.type;
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name } = evt.data;

      if (!id || !email_addresses || !email_addresses[0]) {
        console.error("Invalid data in user.created event");
        return new Response("Bad Request: Missing user data", { status: 400 });
      }

      const email = email_addresses[0].email_address || "";
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        await ctx.runMutation(api.users.syncUser, {
          userId: id,
          email,
          name,
        });
      } catch (error) {
        console.error("Error saving user to database:", error);
        return new Response("Internal Server Error", { status: 500 });
      }
    } else {
      console.warn(`Unhandled event type: ${eventType}`);
    }

    return new Response("Webhook processed successfully", { status: 200 });
  }),
});

export default http;
