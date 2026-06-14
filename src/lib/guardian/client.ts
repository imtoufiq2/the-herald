import {
  GUARDIAN_BASE,
  GUARDIAN_FIELDS,
  GUARDIAN_FIELDS_FULL,
  GUARDIAN_ORDER,
  GUARDIAN_TAGS,
} from "./endpoints.constants";
import type {
  GuardianItem,
  GuardianItemResponse,
  GuardianSearchResponse,
} from "./guardian.types";
import { mapArticle, mapSummary } from "./mappers";
import { fromSlug } from "@/lib/data/slug";
import type { Article, ArticleSummary } from "@/types/article.types";
import { FEED_PAGE_SIZE, RELATED_COUNT, REVALIDATE } from "@/constants/site.constants";

const KEY = process.env.GUARDIAN_API_KEY ?? "";

async function search(pageSize: number, section?: string): Promise<GuardianItem[]> {
  const url = new URL(`${GUARDIAN_BASE}/search`);
  url.searchParams.set("api-key", KEY);
  url.searchParams.set("show-fields", GUARDIAN_FIELDS);
  url.searchParams.set("show-tags", GUARDIAN_TAGS);
  url.searchParams.set("order-by", GUARDIAN_ORDER);
  url.searchParams.set("page-size", String(pageSize));
  if (section) url.searchParams.set("section", section);

  const res = await fetch(url, {
    next: { revalidate: REVALIDATE.home, tags: [REVALIDATE.tag] },
  });
  if (!res.ok) throw new Error(`Guardian search failed: ${res.status}`);
  const data = (await res.json()) as GuardianSearchResponse;
  return data.response.results;
}

export async function fetchFeed(): Promise<ArticleSummary[]> {
  return (await search(FEED_PAGE_SIZE)).map(mapSummary);
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
  const url = new URL(`${GUARDIAN_BASE}/${fromSlug(slug)}`);
  url.searchParams.set("api-key", KEY);
  url.searchParams.set("show-fields", GUARDIAN_FIELDS_FULL);
  url.searchParams.set("show-tags", GUARDIAN_TAGS);

  const res = await fetch(url, {
    next: { revalidate: REVALIDATE.article, tags: [REVALIDATE.tag] },
  });
  if (!res.ok) throw new Error(`Guardian item failed: ${res.status}`);
  const data = (await res.json()) as GuardianItemResponse;
  return mapArticle(data.response.content);
}

export async function fetchRelated(
  section: string,
  excludeSlug: string,
): Promise<ArticleSummary[]> {
  const items = (await search(RELATED_COUNT + 1, section)).map(mapSummary);
  return items.filter((a) => a.slug !== excludeSlug).slice(0, RELATED_COUNT);
}
