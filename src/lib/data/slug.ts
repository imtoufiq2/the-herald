/**
 * Guardian content ids look like "technology/2026/jun/13/ai-newsroom".
 * We swap the slashes for "~" so the id collapses into one clean path segment
 * (avoids `%2F` being normalised to `/` by the platform), keeping the route at
 * `/article/[slug]`. fromSlug() restores the id to fetch the single item.
 */
const SEPARATOR = "~";

export function toSlug(guardianId: string): string {
  return guardianId.replaceAll("/", SEPARATOR);
}

export function fromSlug(slug: string): string {
  return slug.replaceAll(SEPARATOR, "/");
}
