import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, getHomeFeed, getRelated } from "@/lib/data/source";
import { Container } from "@/components/ui/Container";
import { ArticleHero } from "@/components/article/ArticleHero";
import { Breadcrumb } from "@/components/article/Breadcrumb";
import { ArticleBody } from "@/components/article/ArticleBody";
import { RelatedList } from "@/components/article/RelatedList";
import { NewsletterCard } from "@/components/article/NewsletterCard";

// ISR: pre-render known slugs, render unknown ones on first request, then cache.
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const feed = await getHomeFeed();
  return feed.map((article) => ({ slug: article.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const related = await getRelated(article);

  return (
    <article>
      <ArticleHero article={article} />
      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
        <div className="flex flex-col gap-6">
          <Breadcrumb category={article.category} />
          <ArticleBody html={article.body} />
        </div>
        <aside className="flex flex-col gap-8">
          <RelatedList articles={related} />
          <NewsletterCard />
        </aside>
      </Container>
    </article>
  );
}
