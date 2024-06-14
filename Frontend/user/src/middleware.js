import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth")?.value;
  const url = request.nextUrl.clone();

  if (
    token &&
    url.pathname === "/auth/login" &&
    url.pathname === "auth/signup"
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
