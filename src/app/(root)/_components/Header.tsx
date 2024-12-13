import { ConvexHttpClient } from "convex/browser";
import { currentUser } from "@clerk/nextjs/server";
import  { api } from "../../../../convex/_generated/api"

async function Header() {
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const user = await currentUser();
  
    const convexUser = await convex.query(api.users.getUser, {
      userId: user?.id || "",
    });

    console.log({ convexUser });
    
    
    return <div>header</div>
}

export default Header;