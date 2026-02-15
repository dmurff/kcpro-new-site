import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If the code reached here, it means the user IS logged in.
    // Now we check if their email matches your ADMIN_EMAIL.
    const token = req.nextauth.token;
    const isAdmin = token?.email === process.env.ADMIN_EMAIL;

    if (!isAdmin) {
      // If they aren't you, show them a "Not Found" or "Unauthorized" view
      // This keeps them on the same URL but shows different content (Rewrite)
      return NextResponse.rewrite(new URL("/unauthorized", req.url));
    }
  },
  {
    callbacks: {
      // This part ensures they are at least signed in with Google.
      // If this returns false, NextAuth sends them to /login automatically.
      authorized: ({ token }) => !!token,
    },
  },
);

// This is your "Protected List".
// Anything starting with these paths will trigger the bouncer.
export const config = {
  matcher: [
    "/admin-dashboard/:path*", // Matches your folder name exactly
  ],
};
