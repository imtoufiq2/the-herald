import { cn } from "@/lib/cn";

export function CategoryBadge({
  label,
  pill = false,
  className,
}: {
  label: string;
  pill?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex w-fit items-center bg-accent px-3 py-1 font-semibold text-accent-fg",
        pill ? "rounded-full" : "rounded-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
