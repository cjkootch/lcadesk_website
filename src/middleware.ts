import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "lca-desk-public-auth-secret-change-in-prod"
);

const SEEKER_PROTECTED = ["/jobs/dashboard", "/jobs/profile"];
const SUPPLIER_PROTECTED = ["/suppliers/dashboard", "/suppliers/profile"];

async function isValidToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check seeker-protected routes
  if (SEEKER_PROTECTED.some((p) => pathname.startsWith(p))) {
    const token = request.cookies.get("lca_seeker_token")?.value;
    if (!token || !(await isValidToken(token))) {
      return NextResponse.redirect(new URL("/jobs/login", request.url));
    }
  }

  // Check supplier-protected routes
  if (SUPPLIER_PROTECTED.some((p) => pathname.startsWith(p))) {
    const token = request.cookies.get("lca_supplier_token")?.value;
    if (!token || !(await isValidToken(token))) {
      return NextResponse.redirect(new URL("/suppliers/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/jobs/dashboard/:path*",
    "/jobs/profile/:path*",
    "/suppliers/dashboard/:path*",
    "/suppliers/profile/:path*",
  ],
};
