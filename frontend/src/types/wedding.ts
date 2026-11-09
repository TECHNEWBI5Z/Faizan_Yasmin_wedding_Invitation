/**
 * Hand-written mirror of the backend Pydantic models
 * (backend/models/wedding.py). Content lives in src/config/wedding.json.
 */

export interface EventItem {
  id: string;
  name: string;
  time_label: string;
  note: string;
}

export interface LunchItem {
  label: string;
  heading: string;
  description: string;
  time_badge: string;
  time_note: string;
}

export interface SectionIntro {
  label: string;
  heading: string;
  description: string;
}

export interface FooterItem {
  left: string;
  monogram: string;
  date: string;
}

export interface WeddingConfig {
  monogram: string;
  names_line: string;
  full_names_line: string;
  bismillah_ar: string;
  bismillah_en: string;
  intro_kicker: string;
  invite_subtitle: string;
  date_label: string;
  date_value: string;
  countdown_target_iso: string;
  countdown_target_label: string;
  events: EventItem[];
  warm_regards: string;
  details: SectionIntro;
  lunch: LunchItem;
  venue: SectionIntro;
  quran_quote: string;
  quran_citation: string;
  map_url: string;
  map_cta: string;
  closing_arabic: string;
  closing_translation: string;
  closing_note: string;
  calendar_google_url: string;
  calendar_ics_path: string;
  calendar_ics_download: string;
  audio_path: string;
  footer: FooterItem;
}
