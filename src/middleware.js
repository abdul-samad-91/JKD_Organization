import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  // Get token from cookies
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    // Attach user info to request headers
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", decoded.sub || decoded.id || "");
    requestHeaders.set("x-user-email", decoded.email || "");
    requestHeaders.set("x-user-role", decoded.role || "user");

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}

// Apply only to protected API routes
export const config = {
    // i have to change this route
  matcher: ["/api/admin/:path*"], 
};
