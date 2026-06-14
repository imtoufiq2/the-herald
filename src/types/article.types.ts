export interface Category {
  /** Guardian section id, e.g. "technology" */
  id: string;
  /** Display label, e.g. "Technology" */
  label: string;
}

export interface Byline {
  author: string;
  avatarUrl?: string;
}

/** Lightweight shape used by feed cards and lists. */
export interface ArticleSummary {
  /** URL-safe id: encodeURIComponent(guardianId). */
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: Category;
  /** ISO 8601 publish date. */
  publishedAt: string;
  byline: Byline;
}

/** Full article, adds rendered body to the summary. */
export interface Article extends ArticleSummary {
  /** Sanitized HTML body (Guardian) or paragraph HTML (mock). */
  body: string;
}
