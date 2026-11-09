import { useEffect, useRef, useState } from "react";

import { AudioToggle } from "@/components/AudioToggle";
import { EntryGate } from "@/components/EntryGate";
import { FilmGrain } from "@/components/FilmGrain";
import { MobileDock } from "@/components/MobileDock";
import { StarField } from "@/components/StarField";
import { TopBar } from "@/components/TopBar";
import { Closing } from "@/components/sections/Closing";
import { EventDetails } from "@/components/sections/EventDetails";
import { Hero } from "@/components/sections/Hero";
import { Lunch } from "@/components/sections/Lunch";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Venue } from "@/components/sections/Venue";
import { useParallaxCamera } from "@/hooks/useParallaxCamera";
import { useWeddingConfig } from "@/hooks/useWeddingConfig";

type GateStage = "closed" | "opening" | "gone";

export default function App() {
  const { data: config, isError, refetch } = useWeddingConfig();
  const [gateStage, setGateStage] = useState<GateStage>("closed");
  const [entered, setEntered] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useParallaxCamera();

  useEffect(() => {
    document.body.classList.toggle("gate-closed", !entered);
    document.body.classList.toggle("invitation-open", entered);
    if (!entered) window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("gate-closed");
      document.body.classList.remove("invitation-open");
    };
  }, [entered]);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setSoundOn(true))
      .catch(() => setSoundOn(false));
  };

  const handleEnter = () => {
    if (gateStage !== "closed") return;
    setGateStage("opening");
    startAudio();
    window.setTimeout(() => setEntered(true), 350);
    window.setTimeout(() => setGateStage("gone"), 2400);
  };

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      startAudio();
    } else {
      audio.pause();
      setSoundOn(false);
    }
  };

  if (isError) {
    return (
      <div className="boot-screen" data-testid="boot-error">
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <span className="boot-star">✦</span>
          <p style={{ margin: 0, color: "#d6c7a8", fontSize: 14 }}>The invitation could not be loaded.</p>
          <button type="button" className="primary-button" onClick={() => void refetch()} data-testid="retry-load-btn">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="boot-screen" data-testid="boot-loading">
        <span className="boot-star" aria-hidden="true">
          ✦
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="sky-ambient" aria-hidden="true" />
      <StarField />
      <audio ref={audioRef} src={config.audio_path} preload="none" onEnded={() => setSoundOn(false)} />

      <div className={`page${entered ? " is-entered" : ""}`} data-testid="invitation-page">
        <TopBar monogram={config.monogram} dateBadge={config.footer.date} mapUrl={config.map_url} />
        <main>
          <Hero config={config} />
          <QuoteBand config={config} />
          <EventDetails config={config} />
          <Lunch config={config} />
          <Venue config={config} />
          <Closing config={config} />
        </main>
        <MobileDock />
      </div>

      <AudioToggle playing={soundOn} onToggle={toggleSound} />
      <FilmGrain />

      {gateStage !== "gone" && (
        <EntryGate
          monogram={config.monogram}
          fullNamesLine={config.full_names_line}
          dateBadge={config.footer.date}
          onEnter={handleEnter}
          opening={gateStage === "opening"}
        />
      )}
    </>
  );
}
