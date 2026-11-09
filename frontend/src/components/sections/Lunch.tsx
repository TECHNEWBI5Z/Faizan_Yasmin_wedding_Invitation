import { Reveal } from "@/components/Reveal";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

export function Lunch({ config }: { config: WeddingConfig }) {
  return (
    <section className="lunch" id="lunch" aria-label="Lunch after Zuhr">
      <Reveal className="section-pad">
        <div className="lunch-card glass-panel" data-testid="lunch-card">
          <div className="lunch-icon" aria-hidden="true">
            ☼
          </div>
          <div className="lunch-copy">
            <StarTileDivider />
            <p className="overline">{config.lunch.label}</p>
            <h2 className="lunch-heading" data-testid="lunch-heading">
              Lunch after <em>Zuhr</em>
            </h2>
            <p className="lunch-desc">{config.lunch.description}</p>
          </div>
          <div className="lunch-badge">
            <strong>{config.lunch.time_badge}</strong>
            <small>{config.lunch.time_note}</small>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
