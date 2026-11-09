import { CalendarButton } from "@/components/CalendarButton";
import { Reveal } from "@/components/Reveal";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

export function EventDetails({ config }: { config: WeddingConfig }) {
  return (
    <section className="details" id="details" aria-label="Event details">
      <Reveal className="section-heading section-pad">
        <StarTileDivider />
        <p className="overline">{config.details.label}</p>
        <h2 className="section-title" data-testid="details-heading">
          A day of <em>blessings</em>
        </h2>
        <p className="section-lede">{config.details.description}</p>
      </Reveal>

      <Reveal className="section-pad" delay={120}>
        <article className="event-card glass-panel" data-testid="event-card">
          <div className="event-card-head">
            <p className="overline">Our celebration</p>
            <p className="event-card-date">{config.date_value}</p>
          </div>

          <div className="event-columns">
            {config.events.map((event, index) => (
              <div key={event.id} style={{ display: "contents" }}>
                <div className={`event-pane${index === 1 ? " event-pane--rose" : ""}`} data-testid={`event-pane-${event.id}`}>
                  <p className="event-pane-name">{event.name}</p>
                  <p className="event-pane-time" data-testid={`event-time-${event.id}`}>
                    {event.time_label}
                  </p>
                  <p className="event-pane-note">{event.note}</p>
                </div>
                {index < config.events.length - 1 && <div className="column-divider" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <p className="warm-regards">{config.warm_regards}</p>

          <CalendarButton
            googleUrl={config.calendar_google_url}
            icsPath={config.calendar_ics_path}
            icsDownloadName={config.calendar_ics_download}
          />
        </article>
      </Reveal>
    </section>
  );
}
