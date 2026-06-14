export const SITE = {
  name: "The Herald",
  tagline: "Independent journalism, sharpened.",
  description:
    "The Herald — clear-eyed reporting on world affairs, politics, business, technology, science and culture.",
  url: "https://the-herald-news.vercel.app",
} as const;

/** ISR revalidation windows (seconds) and the shared cache tag. */
export const REVALIDATE = { home: 60, article: 300, tag: "articles" } as const;

export const FEED_PAGE_SIZE = 10;
export const RELATED_COUNT = 4;
