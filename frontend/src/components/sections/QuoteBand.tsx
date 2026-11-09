import { Reveal } from "@/components/Reveal";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

export function QuoteBand({ config }: { config: WeddingConfig }) {
  return (
    <section className="quote-band" id="celebration" aria-label="Qur'anic verse">
      <Reveal className="quote-band-inner section-pad">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote className="quote-text" data-testid="quran-quote">
          {config.quran_quote}
        </blockquote>
        <p className="quote-citation">{config.quran_citation}</p>
        <StarTileDivider />
      </Reveal>
    </section>
  );
}
