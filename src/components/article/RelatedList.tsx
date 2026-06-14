import Link from "next/link";
import type { ArticleSummary } from "@/types/article.types";
import { CardImage } from "@/components/ui/CardImage";
import { Time } from "@/components/ui/Time";

/** Sidebar "Related Articles" — thumbnail + title + date rows in a bordered card. */
export function RelatedList({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="mb-4 text-[22px] font-bold leading-6 text-[#0a0a0a] dark:text-fg"
      >
        Related Articles
      </h2>
      <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-(--shadow-card)">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/article/${article.slug}`}
              className="group flex items-center gap-4 p-4 transition-colors hover:bg-fg/3"
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-md bg-surface-muted">
                <CardImage src={article.imageUrl} alt="" sizes="64px" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="line-clamp-2 text-sm font-semibold leading-snug text-[#0a0a0a] transition-colors group-hover:text-accent dark:text-fg">
                  {article.title}
                </span>
                <Time
                  iso={article.publishedAt}
                  className="text-xs text-[#737373] dark:text-fg-muted"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
