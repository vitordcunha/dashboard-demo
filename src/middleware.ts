import { NextResponse, NextRequest } from "next/server";

/**
 * A middleware function for Next.js that redirects requests to a specific dashboard based on the request path.
 *
 * @param request - The incoming Next.js request object.
 * @returns - If the request path does not start with the sales dashboard URL, a redirect response is returned to the sales dashboard.
 *            Otherwise, the function returns without any response.
 */
export function middleware(request: NextRequest) {
  const salesDashboardUrl = "/dashboard/sales";

  if (!request.nextUrl.pathname.startsWith(salesDashboardUrl)) {
    return NextResponse.redirect(new URL(salesDashboardUrl, request.url)); // Redirect to sales dashboard
  }

  return;
}

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
  ],
};
