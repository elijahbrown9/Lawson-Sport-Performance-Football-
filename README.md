# Lawson Sport Performance Football Dashboard

Public-facing Next.js dashboard for Lawson football updates, powered by a published Google Sheets CSV.

## Features
- App Router + TypeScript + Tailwind CSS.
- Public leaderboards with first names only.
- Pages:
  - `/` Composite score leaderboard.
  - `/attendance` Attendance leaderboard.
  - `/vertical` Vertical jump leaderboard.
  - `/strength` Strength metrics table.
  - `/today` Daily focus section + Google Sheet link.
- Server-side CSV fetch + safe parsing via reusable `fetchDashboardData()`.
- ISR revalidation every 60 seconds.

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Set `NEXT_PUBLIC_DASHBOARD_CSV_URL` to your published Google Sheet CSV URL for tab `dashboard_view`.
4. Start development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Google Sheets publishing notes
- In Google Sheets, publish the `dashboard_view` tab as CSV.
- Use that public CSV URL in `NEXT_PUBLIC_DASHBOARD_CSV_URL`.

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Add environment variable:
   - `NEXT_PUBLIC_DASHBOARD_CSV_URL` = your published CSV URL.
4. Deploy. Vercel will run `npm run build`.

The app uses Next.js ISR with `revalidate = 60`, so updates appear roughly once per minute.
