import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { REVALIDATE } from "@/constants/site.constants";
import { isAuthorized, tokenFromRequest } from "@/lib/revalidate/auth";

/**
 * On-demand ISR invalidation.
 *   POST /api/revalidate?secret=<REVALIDATE_SECRET>&path=/
 * Invalidates the shared "articles" cache tag (all Guardian fetches) and the
 * given path (defaults to home). Use after publishing to push fresh content.
 */
export async function POST(req: Request) {
  if (!isAuthorized(tokenFromRequest(req), process.env.REVALIDATE_SECRET)) {
    return NextResponse.json(
      { revalidated: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const path = new URL(req.url).searchParams.get("path") ?? "/";
  // "max" = drop-in for the old single-arg purge (Next 16). Tag invalidation
  // hits every route that fetched with this tag (home + all articles).
  revalidateTag(REVALIDATE.tag, "max");
  revalidatePath(path);

  return NextResponse.json({ revalidated: true, tag: REVALIDATE.tag, path });
}
