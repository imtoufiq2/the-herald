import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const STYLES =
  "inline-flex h-9 items-center justify-center rounded-sm bg-accent px-5 text-sm font-medium text-accent-fg shadow-sm transition-colors hover:bg-accent-hover";

type Props = {
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
};

export function Button({ href, type = "button", className, children }: Props) {
  if (href) {
    return (
      <Link href={href} className={cn(STYLES, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cn(STYLES, className)}>
      {children}
    </button>
  );
}
