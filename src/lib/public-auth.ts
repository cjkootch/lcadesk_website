import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "lca-desk-public-auth-secret-change-in-prod"
);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://app.lcadesk.com";

// Cookie names — separate auth contexts
export const SEEKER_COOKIE = "lca_seeker_token";
export const SUPPLIER_COOKIE = "lca_supplier_token";

export type UserType = "seeker" | "supplier";

export interface PublicSession {
  id: string;
  email: string;
  name: string;
  userType: UserType;
}

// ─── Server-side session check ────────────────────────────────────

export async function getSession(userType: UserType): Promise<PublicSession | null> {
  const cookieStore = await cookies();
  const cookieName = userType === "seeker" ? SEEKER_COOKIE : SUPPLIER_COOKIE;
  const token = cookieStore.get(cookieName)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      id: payload.sub as string,
      email: payload.email as string,
      name: payload.name as string,
      userType: payload.userType as UserType,
    };
  } catch {
    return null;
  }
}

export function isAuthenticated(userType: UserType): Promise<boolean> {
  return getSession(userType).then((s) => s !== null);
}

// ─── API helpers ──────────────────────────────────────────────────

export async function apiPost(path: string, body: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export async function apiGet(path: string, token: string) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

// ─── Token creation (for use in server actions) ───────────────────

export async function createToken(payload: {
  sub: string;
  email: string;
  name: string;
  userType: UserType;
}): Promise<string> {
  return new SignJWT({
    email: payload.email,
    name: payload.name,
    userType: payload.userType,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(JWT_SECRET);
}

export async function setAuthCookie(userType: UserType, token: string) {
  const cookieStore = await cookies();
  const cookieName = userType === "seeker" ? SEEKER_COOKIE : SUPPLIER_COOKIE;
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
}

export async function clearAuthCookie(userType: UserType) {
  const cookieStore = await cookies();
  const cookieName = userType === "seeker" ? SEEKER_COOKIE : SUPPLIER_COOKIE;
  cookieStore.delete(cookieName);
}
