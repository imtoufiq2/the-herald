import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

// Centered content column capped at the design's 1200px max with responsive gutters.
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-(--container-max) px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
