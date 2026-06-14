import { Container } from "@/components/ui/Container";
import { BroadcastIcon } from "@/components/ui/icons";

export function Ticker({ headlines }: { headlines: string[] }) {
  if (headlines.length === 0) return null;

  const Item = ({ text }: { text: string }) => (
    <span className="mx-4 inline-flex items-center text-sm font-medium text-fg">
      <span className="mr-4 text-accent" aria-hidden>
        •
      </span>
      {text}
    </span>
  );

  return (
    <section
      aria-label="Latest headlines"
      className="flex h-14 items-center border-y border-border bg-[#f7f7f8] dark:bg-surface-muted"
    >
      <Container className="flex items-center gap-4">
        <span className="eyebrow inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-accent px-3 py-1 font-bold text-accent-fg">
          <BroadcastIcon className="size-3.5" />
          Latest
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track">
            <span className="flex">
              {headlines.map((h, i) => (
                <Item key={`a-${i}`} text={h} />
              ))}
            </span>
            <span className="flex" aria-hidden>
              {headlines.map((h, i) => (
                <Item key={`b-${i}`} text={h} />
              ))}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
