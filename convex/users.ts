import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Mutation to sync a user with the database. 
 * Creates a new user if not already present.
 */
export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    if (!existingUser) {
      await ctx.db.insert("users", {
        userId: args.userId,
        email: args.email,
        name: args.name,
        isPro: false,
      });
    }
  },
});

/**
 * Query to fetch a user by their `userId`.
 */
export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    if (!args.userId) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_user_id") // Ensure this matches your schema
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    return user || null; // Explicitly return null if user is not found
  },
});

/**
 * Mutation to upgrade a user to a Pro account.
 */
export const upgradeToPro = mutation({
  args: {
    email: v.string(),
    lemonSqueezyCustomerId: v.string(),
    lemonSqueezyOrderId: v.string(),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (!user) {
      throw new Error("User not found"); // Throw error if user doesn't exist
    }

    await ctx.db.patch(user._id, {
      isPro: true,
      proSince: Date.now(), // Add timestamp for Pro activation
      lemonSqueezyCustomerId: args.lemonSqueezyCustomerId,
      lemonSqueezyOrderId: args.lemonSqueezyOrderId,

    });

    return { success: true };
  },
});
