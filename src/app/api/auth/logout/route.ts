import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const userType = req.nextUrl.searchParams.get("type");
  const cookieName = userType === "supplier" ? "lca_supplier_token" : "lca_seeker_token";
  const redirectTo = userType === "supplier" ? "/opportunities" : "/jobs";

  const cookieStore = await cookies();
  cookieStore.delete(cookieName);

  return NextResponse.redirect(new URL(redirectTo, req.url));
}
