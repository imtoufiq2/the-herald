import { describe, it, expect } from "vitest";
import { isAuthorized, tokenFromRequest } from "./auth";

describe("revalidate auth", () => {
  it("authorizes a matching token", () => {
    expect(isAuthorized("s3cret", "s3cret")).toBe(true);
  });

  it("rejects a wrong, missing, or unconfigured secret", () => {
    expect(isAuthorized("nope", "s3cret")).toBe(false);
    expect(isAuthorized(null, "s3cret")).toBe(false);
    expect(isAuthorized("s3cret", undefined)).toBe(false);
  });

  it("reads the token from header first, then query", () => {
    const headerReq = new Request("https://x.dev/api/revalidate?secret=q", {
      headers: { "x-revalidate-secret": "h" },
    });
    expect(tokenFromRequest(headerReq)).toBe("h");

    const queryReq = new Request("https://x.dev/api/revalidate?secret=q");
    expect(tokenFromRequest(queryReq)).toBe("q");
  });
});
