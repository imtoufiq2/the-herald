import Link from "next/link";
import type { Category } from "@/types/article.types";
import { cn } from "@/lib/cn";

export function CategoryLabel({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "eyebrow inline-flex w-fit items-center rounded-sm bg-accent px-3 py-1 font-semibold text-accent-fg transition-colors hover:bg-accent-hover",
        className,
      )}
    >
      {category.label}
    </Link>
  );
}
