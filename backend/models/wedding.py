from pydantic import BaseModel


class EventItem(BaseModel):
    id: str
    name: str
    time_label: str
    note: str


class LunchItem(BaseModel):
    label: str
    heading: str
    description: str
    time_badge: str
    time_note: str


class SectionIntro(BaseModel):
    label: str
    heading: str
    description: str


class FooterItem(BaseModel):
    left: str
    monogram: str
    date: str


class WeddingConfig(BaseModel):
    monogram: str
    names_line: str
    full_names_line: str
    bismillah_ar: str
    bismillah_en: str
    intro_kicker: str
    invite_subtitle: str
    date_label: str
    date_value: str
    countdown_target_iso: str
    countdown_target_label: str
    events: list[EventItem]
    warm_regards: str
    details: SectionIntro
    lunch: LunchItem
    venue: SectionIntro
    quran_quote: str
    quran_citation: str
    map_url: str
    map_cta: str
    closing_arabic: str
    closing_translation: str
    closing_note: str
    calendar_google_url: str
    calendar_ics_path: str
    calendar_ics_download: str
    audio_path: str
    footer: FooterItem
