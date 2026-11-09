import { useEffect, useMemo, useState } from "react";

export interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const pad = (value: number) => String(value).padStart(2, "0");

export function useCountdown(targetIso: string): CountdownParts {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = Math.max(0, target - now);
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: pad(Math.floor(totalSeconds / 86400)),
    hours: pad(Math.floor((totalSeconds % 86400) / 3600)),
    minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
    seconds: pad(totalSeconds % 60),
  };
}
