export function tokenFromRequest(req: Request): string | null {
  const fromHeader = req.headers.get("x-revalidate-secret");
  if (fromHeader) return fromHeader;
  return new URL(req.url).searchParams.get("secret");
}

export function isAuthorized(token: string | null, secret: string | undefined): boolean {
  if (!secret || !token) return false;
  return token === secret;
}
