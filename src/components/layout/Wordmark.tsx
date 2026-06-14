import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/constants/site.constants";

/** "THE HERALD" masthead lettering — editorial serif, tight tracking. */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "sm";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif font-bold tracking-[-0.01em] text-fg",
        size === "md" ? "text-2xl" : "text-xl",
        className,
      )}
    >
      {SITE.name}
    </Link>
  );
}
