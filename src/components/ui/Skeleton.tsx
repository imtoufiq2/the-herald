import { cn } from "@/lib/cn";

/** Neutral pulsing placeholder. Mirrors real layout dimensions so swapping
 *  in real content causes zero layout shift (CLS 0). */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse rounded-md bg-fg/10", className)} aria-hidden />
  );
}
