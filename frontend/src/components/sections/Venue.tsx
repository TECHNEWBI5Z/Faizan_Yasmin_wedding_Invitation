import { Reveal } from "@/components/Reveal";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

export function Venue({ config }: { config: WeddingConfig }) {
  return (
    <section className="venue" id="venue" aria-label="Venue and map">
      <Reveal className="section-heading section-pad">
        <StarTileDivider />
        <p className="overline">{config.venue.label}</p>
        <h2 className="section-title" data-testid="venue-heading">
          Meet us <em>there</em>
        </h2>
        <p className="section-lede">{config.venue.description}</p>
      </Reveal>

      <Reveal className="section-pad" delay={120}>
        <div className="venue-card glass-panel" data-testid="venue-card">
          <div className="venue-art" aria-hidden="true">
            <img src="/img/venue-courtyard.webp" alt="" width={1152} height={772} loading="lazy" decoding="async" />
          </div>
          <div className="venue-copy">
            <p className="overline">The celebration grounds</p>
            <a className="primary-button" href={config.map_url} target="_blank" rel="noopener" data-testid="map-location-link">
              {config.map_cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
