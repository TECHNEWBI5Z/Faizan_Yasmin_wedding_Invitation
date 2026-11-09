import { useMemo } from "react";

interface EntryGateProps {
  monogram: string;
  fullNamesLine: string;
  dateBadge: string;
  onEnter: () => void;
  opening: boolean;
}

/** Eight-point star (Khatam) used across the gate filigree. */
function Khatam({ x, y, size = 7 }: { x: number; y: number; size?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${size / 7})`}
      d="M0 -7l1.9 4.4 4.8-1.4-2.7 4.2 3.9 2.8-4.8.7.7 4.8-3.8-3-3.8 3 .7-4.8-4.8-.7 3.9-2.8-2.7-4.2 4.8 1.4z"
      fill="#e5ae33"
      fillOpacity="0.75"
    />
  );
}

export function EntryGate({ monogram, fullNamesLine, dateBadge, onEnter, opening }: EntryGateProps) {
  const archStars = useMemo(
    () =>
      Array.from({ length: 11 }, (_, index) => {
        const angle = Math.PI * (index / 10);
        return { x: 300 - 272 * Math.cos(angle), y: 430 - 372 * Math.sin(angle) };
      }),
    [],
  );

  const [nameLeft, nameRight] = fullNamesLine.split(" & ");

  return (
    <div className={`entry-gate${opening ? " gate-opening" : ""}`} data-testid="entry-gate">
      {/* Carved palace doors — part in 3D perspective on open */}
      <div className="gate-doors">
        <div className="gate-door gate-door--left">
          <svg viewBox="0 0 300 430" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="door-body" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#161130" />
                <stop offset="0.82" stopColor="#221942" />
                <stop offset="1" stopColor="#2b1f4e" />
              </linearGradient>
              <pattern id="door-tiles" width="46" height="40" patternUnits="userSpaceOnUse">
                <path d="M23 3l7.5 15.4L23 34l-7.5-15.6z" fill="none" stroke="#e5ae33" strokeOpacity="0.18" strokeWidth="1" />
                <circle cx="23" cy="18.4" r="1.3" fill="#e5ae33" fillOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="300" height="430" fill="url(#door-body)" />
            <rect width="300" height="430" fill="url(#door-tiles)" />
            <path
              d="M8 430V196C8 92 74 30 150 30s142 62 142 166v234"
              fill="none"
              stroke="#e5ae33"
              strokeOpacity="0.6"
              strokeWidth="1.6"
            />
            <path
              d="M18 430V198c0-98 60-156 132-156s132 58 132 156v232"
              fill="none"
              stroke="#e5ae33"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="gate-door gate-door--right">
          <svg viewBox="0 0 300 430" preserveAspectRatio="none" aria-hidden="true">
            <rect width="300" height="430" fill="url(#door-body)" />
            <rect width="300" height="430" fill="url(#door-tiles)" />
            <path
              d="M8 430V196C8 92 74 30 150 30s142 62 142 166v234"
              fill="none"
              stroke="#e5ae33"
              strokeOpacity="0.6"
              strokeWidth="1.6"
            />
            <path
              d="M18 430V198c0-98 60-156 132-156s132 58 132 156v232"
              fill="none"
              stroke="#e5ae33"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Star-tile arch frame above the doors */}
      <div className="gate-arch">
        <svg viewBox="0 0 600 460" fill="none" aria-hidden="true">
          <path
            d="M28 460V210C28 96 146 18 300 18s272 78 272 192v250"
            stroke="#e5ae33"
            strokeOpacity="0.8"
            strokeWidth="1.8"
          />
          <path
            d="M44 460V212C44 106 156 32 300 32s256 74 256 180v248"
            stroke="#e5ae33"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          {archStars.map((star, index) => (
            <Khatam key={index} x={star.x} y={star.y} size={index % 2 === 0 ? 7 : 5} />
          ))}
        </svg>
      </div>

      {/* UI rows — every line in its own row, never over a figure */}
      <div className="gate-ui">
        <p className="gate-overline">A blessed beginning awaits</p>
        <div className="gate-ornament-row" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>
        <div className="seal-zone">
          <span className="seal-halo" aria-hidden="true" />
          <button
            type="button"
            className="gold-seal"
            onClick={onEnter}
            aria-label="Tap the seal to open the invitation"
            data-testid="open-invitation-btn"
          >
            <svg className="gold-seal-star" width="112" height="112" viewBox="0 0 112 112" aria-hidden="true">
              <path
                d="M56 6l7.6 18.4 19.8-5.8-11.9 16.8 16 12-20.2 2.3 2.2 20.2-13.5-14.7-13.5 14.7 2.2-20.2-20.2-2.3 16-12L19.4 18.6l19.8 5.8z"
                fill="currentColor"
              />
            </svg>
            <span className="seal-arabic" lang="ar" dir="rtl">
              يَزَان
            </span>
            <span className="seal-monogram">{monogram}</span>
          </button>
        </div>
        <p className="gate-hint" data-testid="entry-hint">
          Tap the seal to enter
        </p>
        <p className="gate-names">
          {nameLeft} <em>&amp;</em> {nameRight}
        </p>
        <p className="gate-names" style={{ fontSize: 12, letterSpacing: "0.24em", opacity: 0.78 }}>
          {dateBadge}
        </p>
      </div>

      <div className="gate-burst" aria-hidden="true" />
    </div>
  );
}
