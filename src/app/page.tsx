import { getHomeFeed } from "@/lib/data/source";
import { Container } from "@/components/ui/Container";
import { HeroFeature } from "@/components/home/HeroFeature";
import { TopStories } from "@/components/home/TopStories";
import { Ticker } from "@/components/home/Ticker";
import { EditorsPicks } from "@/components/home/EditorsPicks";

// ISR: regenerate at most once per window; also invalidated on demand via
// POST /api/revalidate. (Not SSG — the feed must stay fresh.)
export const revalidate = 60;

export default async function HomePage() {
  const feed = await getHomeFeed();
  const [feature, ...rest] = feed;
  const topStories = rest.slice(0, 3);
  const editorsPicks = rest.slice(3, 7);
  const headlines = rest.slice(0, 8).map((a) => a.title);

  if (!feature) {
    return (
      <Container className="py-24 text-center text-fg-muted">
        No stories available right now.
      </Container>
    );
  }

  return (
    <>
      <HeroFeature article={feature} />
      <TopStories articles={topStories} />
      <Ticker headlines={headlines} />
      <EditorsPicks articles={editorsPicks} />
    </>
  );
}
