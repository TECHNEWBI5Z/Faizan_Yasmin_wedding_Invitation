# Faizan & Yasmin – Wedding Invitation

Cinematic "Royal Midnight – Arabian Night Garden" invitation (React + Vite + Tailwind).
No people or animals appear anywhere in the artwork.

## Edit the details
Everything (names, date, times, text, links) lives in one file:

    frontend/src/config/wedding.json

If you change the date or times, also update these two (they hold the time separately):
- `calendar_google_url` (the `dates=` value, in UTC) inside the same file
- `frontend/public/assets/Faizan-Yasmin-Wedding.ics` (`DTSTART` / `DTEND`, in UTC)

Current schedule: Nikah 11:30 AM, Reception 1:00 PM (IST), countdown target 11:00 AM IST.

## Run locally
    cd frontend
    npm install
    npm run dev          # http://localhost:3000

## Build and publish (static hosting)
    npm run build        # output in frontend/dist
Upload `frontend/dist` to Netlify, Vercel or GitHub Pages. No backend needed.

## Optional backend
`backend/` is a small FastAPI server that serves the same JSON at `/api/config`.
    cd backend && pip install -r requirements.txt && uvicorn server:app --port 8001

## Files you must keep
`frontend/public/assets/al-hamdulillah.mp3`, `Faizan-Yasmin-Wedding.ics` and
`frontend/public/img/*.webp`. File names are case-sensitive on most hosts.
