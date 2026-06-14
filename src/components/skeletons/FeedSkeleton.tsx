import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton";

/** Home loading state — matches hero + Top Stories + Editor's Picks layout. */
export function FeedSkeleton() {
  return (
    <div aria-hidden>
      <section className="bg-surface-muted">
        <Container className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <div className="space-y-5">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-48" />
          </div>
          <Skeleton className="aspect-7/5 w-full" />
        </Container>
      </section>

      <Container className="py-12">
        <Skeleton className="h-7 w-40" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} variant="top" />
          ))}
        </div>
      </Container>

      <Container className="py-12">
        <Skeleton className="h-7 w-44" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} variant="pick" />
          ))}
        </div>
      </Container>
    </div>
  );
}
