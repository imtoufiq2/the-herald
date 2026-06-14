import Link from "next/link";
import type { ArticleSummary } from "@/types/article.types";
import { Container } from "@/components/ui/Container";
import { CardImage } from "@/components/ui/CardImage";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import { Byline } from "@/components/ui/Byline";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HeroFeature({ article }: { article: ArticleSummary }) {
  return (
    <section className="bg-surface-muted">
      <Container className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="flex flex-col gap-[23.5px]">
          <CategoryBadge label={article.category.label} />
          <h1 className="font-serif text-[2rem] font-bold leading-[1.1] text-fg sm:text-4xl lg:text-5xl">
            <Link href={`/article/${article.slug}`} className="hover:text-accent">
              {article.title}
            </Link>
          </h1>
          <p className="max-w-prose text-[17px] leading-[27px] text-fg-muted">
            {article.excerpt}
          </p>
          <Byline byline={article.byline} publishedAt={article.publishedAt} />
          <Link
            href={`/article/${article.slug}`}
            className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            <span>
              Read More<span className="sr-only">: {article.title}</span>
            </span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <Link
          href={`/article/${article.slug}`}
          aria-hidden
          tabIndex={-1}
          className="relative block aspect-7/5 overflow-hidden rounded-md bg-bg shadow-(--shadow-card)"
        >
          <CardImage
            src={article.imageUrl}
            alt={article.title}
            sizes="(min-width:1024px) 588px, 100vw"
            priority
          />
        </Link>
      </Container>
    </section>
  );
}
