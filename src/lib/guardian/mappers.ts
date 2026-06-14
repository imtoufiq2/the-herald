import type { Article, ArticleSummary } from "@/types/article.types";
import type { GuardianItem } from "./guardian.types";
import { toSlug } from "@/lib/data/slug";

/** Guardian trailText can contain markup; strip it for plain-text excerpts. */
function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

export function mapSummary(item: GuardianItem): ArticleSummary {
  const contributor = item.tags?.find((t) => t.type === "contributor");
  return {
    slug: toSlug(item.id),
    title: item.fields?.headline ?? item.webTitle,
    excerpt: stripHtml(item.fields?.trailText ?? ""),
    imageUrl: item.fields?.thumbnail ?? "",
    category: { id: item.sectionId, label: item.sectionName },
    publishedAt: item.webPublicationDate,
    byline: {
      author: item.fields?.byline || contributor?.webTitle || "The Herald",
      avatarUrl: contributor?.bylineImageUrl,
    },
  };
}

export function mapArticle(item: GuardianItem): Article {
  return { ...mapSummary(item), body: item.fields?.body ?? "" };
}
