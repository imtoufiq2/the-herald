import { describe, it, expect } from "vitest";
import { mapArticle, mapSummary } from "./mappers";
import type { GuardianItem } from "./guardian.types";

const item: GuardianItem = {
  id: "technology/2026/jun/13/ai-newsroom",
  type: "article",
  sectionId: "technology",
  sectionName: "Technology",
  webPublicationDate: "2026-06-13T08:00:00Z",
  webTitle: "Fallback title",
  webUrl: "https://example.com",
  fields: {
    headline: "The Quiet Revolution",
    trailText: "Inside the <strong>newsroom</strong> where algorithms draft headlines.",
    thumbnail: "https://media.guim.co.uk/thumb.jpg",
    byline: "Eleanor Marsh",
    body: "<p>Body.</p>",
  },
  tags: [
    {
      id: "profile/eleanor-marsh",
      type: "contributor",
      webTitle: "Eleanor Marsh",
      bylineImageUrl: "https://media.guim.co.uk/avatar.jpg",
    },
  ],
};

describe("guardian mappers", () => {
  it("maps an item to an ArticleSummary with a stripped excerpt", () => {
    const s = mapSummary(item);
    expect(s.title).toBe("The Quiet Revolution");
    expect(s.excerpt).toBe("Inside the newsroom where algorithms draft headlines.");
    expect(s.category).toEqual({ id: "technology", label: "Technology" });
    expect(s.byline.avatarUrl).toContain("avatar.jpg");
    expect(s.slug).not.toContain("/");
  });

  it("falls back to webTitle and The Herald byline when fields are missing", () => {
    const s = mapSummary({ ...item, fields: undefined, tags: [] });
    expect(s.title).toBe("Fallback title");
    expect(s.byline.author).toBe("The Herald");
  });

  it("includes the body in a full Article", () => {
    expect(mapArticle(item).body).toBe("<p>Body.</p>");
  });
});
