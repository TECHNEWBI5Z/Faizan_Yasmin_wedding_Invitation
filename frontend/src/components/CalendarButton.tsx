interface CalendarButtonProps {
  googleUrl: string;
  icsPath: string;
  icsDownloadName: string;
}

const appleDevice = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

/**
 * Single smart "Add to calendar" control: iPhone/iPad downloads the .ics
 * file, everything else opens the Google Calendar template.
 */
export function CalendarButton({ googleUrl, icsPath, icsDownloadName }: CalendarButtonProps) {
  const isApple = appleDevice();

  return (
    <div className="calendar-row">
      <a
        className="primary-button"
        href={isApple ? icsPath : googleUrl}
        {...(isApple
          ? { download: icsDownloadName }
          : { target: "_blank", rel: "noopener" })}
        data-testid="add-to-calendar-btn"
      >
        <span aria-hidden="true">◷</span> Add to calendar
      </a>
      <p className="calendar-caption" data-testid="calendar-caption">
        {isApple ? "Opens as an iPhone calendar invite (.ics)" : "Opens Google Calendar — iPhone guests receive an .ics file"}
      </p>
    </div>
  );
}
