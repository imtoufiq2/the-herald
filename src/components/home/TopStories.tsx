import type { ArticleSummary } from "@/types/article.types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function TopStories({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;
  return (
    <Container className="py-12 lg:px-6">
      <section aria-label="Top Stories">
        <SectionHeading title="Top Stories" viewAllHref="/" />
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <li key={article.slug}>
              <ArticleCard article={article} variant="top" priority={i === 0} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
