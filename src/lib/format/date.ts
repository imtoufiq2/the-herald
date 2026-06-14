/**
 * Deterministic date formatting (fixed en-GB locale) so server and client
 * render identical strings and there is no hydration mismatch.
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
