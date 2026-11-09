interface LanternProps {
  className: string;
  height?: number;
}

/** Brass hanging lantern — pure SVG, warm flame flicker, no creatures. */
export function Lantern({ className, height = 150 }: LanternProps) {
  return (
    <div className={`lantern-hang ${className}`} aria-hidden="true" style={{ height }}>
      <svg width="58" height={height} viewBox={`0 0 58 ${height}`} fill="none">
        <defs>
          <radialGradient id="flame" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="55%" stopColor="#f7c948" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="29" y1="0" x2="29" y2={height * 0.28} stroke="#8a6a2f" strokeWidth="1.4" />
        <circle cx="29" cy={height * 0.28} r="3" fill="#e5ae33" />
        <path
          d={`M29 ${height * 0.28 + 3} q10 4 10 14 v${height * 0.3} q0 10 -10 14 q-10 -4 -10 -14 v-${height * 0.3} q0 -10 10 -14z`}
          fill="rgba(24, 18, 44, 0.92)"
          stroke="#c9962e"
          strokeWidth="1.4"
        />
        <circle cx="29" cy={height * 0.28 + 22} r="15" fill="url(#flame)" className="lantern-flame" />
        <line x1="19" y1={height * 0.28 + 8} x2="19" y2={height * 0.28 + 36} stroke="#c9962e" strokeWidth="1" opacity="0.7" />
        <line x1="39" y1={height * 0.28 + 8} x2="39" y2={height * 0.28 + 36} stroke="#c9962e" strokeWidth="1" opacity="0.7" />
        <circle cx="29" cy={height - 12} r="3.4" fill="#e5ae33" />
      </svg>
    </div>
  );
}
