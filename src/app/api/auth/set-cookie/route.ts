import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { token, userType } = await req.json();

  if (!token || !userType) {
    return NextResponse.json({ error: "Missing token or userType" }, { status: 400 });
  }

  const cookieName = userType === "seeker" ? "lca_seeker_token" : "lca_supplier_token";

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return NextResponse.json({ success: true });
}
