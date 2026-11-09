import { useCountdown } from "@/hooks/useCountdown";

interface CountdownProps {
  targetIso: string;
  targetLabel: string;
}

const units = [
  { key: "days", label: "Days", testid: "countdown-days" },
  { key: "hours", label: "Hours", testid: "countdown-hours" },
  { key: "minutes", label: "Minutes", testid: "countdown-minutes" },
  { key: "seconds", label: "Seconds", testid: "countdown-seconds" },
] as const;

export function Countdown({ targetIso, targetLabel }: CountdownProps) {
  const remaining = useCountdown(targetIso);

  return (
    <div className="countdown" role="timer" aria-label={`Time until the Nikah, ${targetLabel}`} data-testid="countdown">
      <p className="countdown-label">Time until the Nikah</p>
      <div className="countdown-grid">
        {units.map((unit) => (
          <span key={unit.key} className="countdown-cell">
            <strong data-testid={unit.testid}>{remaining[unit.key]}</strong>
            <small>{unit.label}</small>
          </span>
        ))}
      </div>
      <p className="countdown-target" data-testid="countdown-target">
        {targetLabel}
      </p>
    </div>
  );
}
