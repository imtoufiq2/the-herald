import { Skeleton } from "@/components/ui/Skeleton";

/** Card placeholder mirroring ArticleCard dimensions so there is no layout shift. */
export function CardSkeleton({ variant = "top" }: { variant?: "top" | "pick" }) {
  return (
    <div className="overflow-hidden rounded-md bg-surface shadow-(--shadow-card) ring-1 ring-border/60">
      <Skeleton className="aspect-16/10 rounded-none" />
      <div className={variant === "top" ? "space-y-3 px-6 pb-5 pt-4" : "space-y-2 p-4"}>
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-5 w-11/12" />
        {variant === "top" && (
          <>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </>
        )}
      </div>
    </div>
  );
}
