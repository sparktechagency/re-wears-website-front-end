/* eslint-disable import/order */
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { myFetch } from "./helpers/myFetch";

const authRoutes = ["/login", "/reset-password"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Get the current user from server
  const userRes = await myFetch("/users/profile");
  const profile = userRes.data;

  if (!profile) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Allow only users with USER role
  if (profile.role !== "USER") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Don't allow authorized users to access auth routes
  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/products/:path*",
    "/product-details/:path*",
    "/sell-now/:path*",
    "/edit-product/:path*",
    "/profile/:path*",
    "/settings/profile-details/:path*",
    "/settings/account-settings/delete-account/:path*",
    "/change-password/:path*",
    "/inbox/:path*",
    "/wishlist/:path*",
    "/leave-review/:path*",
    "/order/:path*",
    "/mark-as-sold/:path*",
    "/login",
    "/reset-password",
  ],
};
