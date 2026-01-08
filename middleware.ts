import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Protect specific routes
export default withAuth({
  pages: {
    signIn: "/login",
  },
});

// Define which paths the middleware should run for
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/dashboard/:path*",
    "/admin/:path*",
    "/profile/:path*",
  ],
};
