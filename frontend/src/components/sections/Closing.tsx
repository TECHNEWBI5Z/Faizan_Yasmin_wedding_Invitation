import { Reveal } from "@/components/Reveal";
import { StarTileDivider } from "@/components/StarTileDivider";
import type { WeddingConfig } from "@/types/wedding";

export function Closing({ config }: { config: WeddingConfig }) {
  const [nameLeft, nameRight] = config.names_line.split(" & ");

  return (
    <>
      <section className="closing" aria-label="Closing dua">
        <Reveal className="closing-inner section-pad">
          <StarTileDivider />
          <p className="arabic closing-arabic" lang="ar" dir="rtl" data-testid="closing-arabic">
            {config.closing_arabic}
          </p>
          <p className="closing-translation">{config.closing_translation}</p>
          <h2 className="closing-names" data-testid="closing-names">
            {nameLeft} <em>&amp;</em> {nameRight}
          </h2>
          <p className="closing-note">{config.closing_note}</p>
        </Reveal>
      </section>

      <footer className="footer-bar" data-testid="footer-bar">
        <span>{config.footer.left}</span>
        <span className="footer-monogram">{config.footer.monogram}</span>
        <span>{config.footer.date}</span>
      </footer>
    </>
  );
}
