import { formatDate } from "@/lib/format/date";

/** Renders an ISO date as a localized, hydration-safe <time> element. */
export function Time({ iso, className }: { iso: string; className?: string }) {
  return (
    <time dateTime={iso} className={className}>
      {formatDate(iso)}
    </time>
  );
}
