import type { Article } from "@/types/article.types";
import { Container } from "@/components/ui/Container";
import { CardImage } from "@/components/ui/CardImage";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { Byline } from "@/components/ui/Byline";

export function ArticleHero({ article }: { article: Article }) {
  return (
    <section className="article-hero relative overflow-hidden text-white">
      <Container className="relative grid items-center gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <CategoryBadge label={article.category.label} pill />
          <h1 className="font-serif text-4xl font-bold leading-tight text-white lg:text-5xl">
            {article.title}
          </h1>
          <p className="text-lg leading-snug text-white/80 lg:text-[22px]">
            {article.excerpt}
          </p>
          <Byline
            byline={article.byline}
            publishedAt={article.publishedAt}
            tone="invert"
          />
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-white/10 lg:col-span-5">
          <CardImage
            src={article.imageUrl}
            alt={article.title}
            sizes="(min-width:1024px) 460px, 100vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
