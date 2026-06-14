import type { Article, ArticleSummary } from "@/types/article.types";
import { fetchArticleBySlug, fetchFeed, fetchRelated } from "@/lib/guardian/client";
import { RELATED_COUNT } from "@/constants/site.constants";
import mockData from "@/data/mock-articles.json";

const articles = mockData as Article[];
const useGuardian = Boolean(process.env.GUARDIAN_API_KEY);

function logFallback(error: unknown): void {
  console.error("[data] Guardian unavailable, using mock fallback:", error);
}

//  Newest-first pool used to compose the home page (hero, top stories, picks).
export async function getHomeFeed(): Promise<ArticleSummary[]> {
  if (useGuardian) {
    try {
      return await fetchFeed();
    } catch (error) {
      logFallback(error);
    }
  }
  return articles;
}

export async function getArticle(slug: string): Promise<Article | null> {
  if (useGuardian) {
    try {
      return await fetchArticleBySlug(slug);
    } catch (error) {
      logFallback(error);
    }
  }
  return articles.find((a) => a.slug === slug) ?? null;
}

export async function getRelated(article: ArticleSummary): Promise<ArticleSummary[]> {
  if (useGuardian) {
    try {
      return await fetchRelated(article.category.id, article.slug);
    } catch (error) {
      logFallback(error);
    }
  }
  return articles
    .filter((a) => a.category.id === article.category.id && a.slug !== article.slug)
    .slice(0, RELATED_COUNT);
}
