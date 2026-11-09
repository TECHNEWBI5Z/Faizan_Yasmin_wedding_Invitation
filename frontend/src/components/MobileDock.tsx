const docks = [
  { href: "#home", icon: "⌂", label: "Home", testid: "dock-home" },
  { href: "#details", icon: "◷", label: "Details", testid: "dock-details" },
  { href: "#venue", icon: "♡", label: "Venue", testid: "dock-venue" },
];

export function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Invitation shortcuts" data-testid="mobile-dock">
      {docks.map((dock) => (
        <a key={dock.href} href={dock.href} data-testid={dock.testid}>
          <span className="dock-icon" aria-hidden="true">
            {dock.icon}
          </span>
          <small>{dock.label}</small>
        </a>
      ))}
    </nav>
  );
}
