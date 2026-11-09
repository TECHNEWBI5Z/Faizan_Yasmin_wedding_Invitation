import type { CSSProperties } from "react";

import { Countdown } from "@/components/Countdown";
import { Lantern } from "@/components/Lantern";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

interface HeroProps {
  config: WeddingConfig;
}

export function Hero({ config }: HeroProps) {
  const [nameLeft, nameRight] = config.names_line.split(" & ");

  return (
    <section className="hero" id="home" aria-label="Wedding invitation">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/img/hero-garden-canal.webp"
          alt=""
          width={1152}
          height={772}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <Lantern className="lantern-hang--left" height={130} />
      <Lantern className="lantern-hang--right" height={150} />

      <div className="hero-content">
        <p className="arabic hero-bismillah hero-row" style={{ "--i": 0 } as CSSProperties} lang="ar" dir="rtl">
          {config.bismillah_ar}
        </p>
        <p className="hero-eyebrow hero-row" style={{ "--i": 1 } as CSSProperties}>
          {config.bismillah_en}
        </p>
        <p className="hero-kicker hero-row" style={{ "--i": 2 } as CSSProperties}>
          {config.intro_kicker}
        </p>
        <h1 className="hero-names hero-row" style={{ "--i": 3 } as CSSProperties} data-testid="hero-names">
          {nameLeft} <em>&amp;</em> {nameRight}
        </h1>
        <p className="hero-subtitle hero-row" style={{ "--i": 4 } as CSSProperties}>
          {config.invite_subtitle}
        </p>
        <div className="hero-date-row hero-row" style={{ "--i": 5 } as CSSProperties}>
          <StarTileDivider />
          <span className="hero-date-label">{config.date_label}</span>
          <span className="hero-date-value" data-testid="hero-date">
            {config.date_value}
          </span>
        </div>
        <div className="hero-row" style={{ "--i": 6 } as CSSProperties}>
          <Countdown targetIso={config.countdown_target_iso} targetLabel={config.countdown_target_label} />
        </div>
        <div className="hero-cta-row hero-row" style={{ "--i": 7 } as CSSProperties}>
          <a className="primary-button" href="#celebration" data-testid="explore-celebration-btn">
            Explore the celebration <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
