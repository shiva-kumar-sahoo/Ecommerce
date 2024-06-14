import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth")?.value;
  const url = request.nextUrl.clone();

  if (!token && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  if (token && url.pathname === "/auth/login") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (token && url.pathname === "/") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/:path*"],
};
