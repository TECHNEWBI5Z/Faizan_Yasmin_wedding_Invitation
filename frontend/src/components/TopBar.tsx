interface TopBarProps {
  monogram: string;
  dateBadge: string;
  mapUrl: string;
}

export function TopBar({ monogram, dateBadge, mapUrl }: TopBarProps) {
  return (
    <header className="topbar" data-testid="topbar">
      <a href="#home" className="monogram" aria-label="Back to the top of the invitation">
        {monogram}
        <small>{dateBadge}</small>
      </a>
      <nav className="topbar-nav" aria-label="Invitation sections">
        <a href="#celebration" data-testid="nav-celebration">
          Celebration
        </a>
        <a href="#details" data-testid="nav-details">
          Details
        </a>
        <a href="#lunch" data-testid="nav-lunch">
          Lunch
        </a>
        <a href="#venue" data-testid="nav-venue">
          Venue
        </a>
      </nav>
      <a
        className="topbar-cta"
        href={mapUrl}
        target="_blank"
        rel="noopener"
        data-testid="nav-location-cta"
      >
        View location <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}