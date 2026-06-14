import type { ArticleSummary } from "@/types/article.types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function EditorsPicks({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;
  return (
    <Container className="py-12 lg:px-6 lg:mb-6">
      <section aria-label="Editor's Picks">
        <SectionHeading title="Editor's Picks" rule />
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} variant="pick" />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
