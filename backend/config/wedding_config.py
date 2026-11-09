"""Wedding content for GET /api/config.

The content lives in ONE file, shared with the frontend:
    frontend/src/config/wedding.json
Edit that file only (names, dates, times, links, text). The backend just serves it.
"""
import json
from pathlib import Path

_CONFIG_PATH = Path(__file__).resolve().parents[2] / "frontend" / "src" / "config" / "wedding.json"

WEDDING_CONFIG: dict = json.loads(_CONFIG_PATH.read_text(encoding="utf-8"))
