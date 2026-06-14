import { describe, it, expect } from "vitest";
import { toSlug, fromSlug } from "./slug";

describe("slug", () => {
  it("round-trips a Guardian id containing slashes", () => {
    const id = "technology/2026/jun/13/ai-newsroom";
    expect(fromSlug(toSlug(id))).toBe(id);
  });

  it("produces a single path segment (no raw slashes)", () => {
    expect(toSlug("world/2026/climate-deadline")).not.toContain("/");
  });
});
