interface AudioToggleProps {
  playing: boolean;
  onToggle: () => void;
}

export function AudioToggle({ playing, onToggle }: AudioToggleProps) {
  return (
    <button
      type="button"
      className={`audio-pill${playing ? " is-playing" : ""}`}
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={playing ? "Pause nasheed" : "Play nasheed"}
      data-testid="music-toggle-btn"
    >
      <span className="audio-wave" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="audio-pill-label">{playing ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
