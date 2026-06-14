import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

/** Article loading state — dark hero band + body/sidebar split (zero CLS). */
export function ArticleSkeleton() {
  return (
    <div aria-hidden>
      <section className="article-hero">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="space-y-5 lg:col-span-7">
            <Skeleton className="h-4 w-28 bg-white/10" />
            <Skeleton className="h-5 w-20 bg-white/10" />
            <Skeleton className="h-12 w-full bg-white/10" />
            <Skeleton className="h-12 w-3/4 bg-white/10" />
            <Skeleton className="h-4 w-full bg-white/10" />
            <Skeleton className="h-10 w-40 bg-white/10" />
          </div>
          <Skeleton className="aspect-4/3 w-full bg-white/10 lg:col-span-5" />
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
        <div>
          <Skeleton className="mb-6 h-4 w-40" />
          <div className="max-w-(--prose-max) space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="space-y-8">
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
      </Container>
    </div>
  );
}
