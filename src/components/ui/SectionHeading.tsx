import Link from "next/link";

export function SectionHeading({
  title,
  viewAllHref,
  rule = false,
}: {
  title: string;
  viewAllHref?: string;
  rule?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="font-serif text-2xl font-bold text-fg">{title}</h2>
      {rule && <span className="h-px flex-1 bg-border" aria-hidden />}
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="ml-auto text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          View all
        </Link>
      )}
    </div>
  );
}
