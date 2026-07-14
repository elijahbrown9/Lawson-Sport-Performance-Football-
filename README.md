# Lawson Sport Performance

Website for **Lawson Sport Performance** — James Lawson Lightning · Nashville, Tennessee.

A static site (no build step) covering the program's off-season systems and athlete testing:

| Page | What's on it |
|---|---|
| `index.html` | Home — training philosophy, program overviews, KPI system |
| `football.html` | Football Off-Season 4-Day Program — all 15 weeks, two-track system, speed & conditioning |
| `all-sport.html` | All-Sport Off-Season 2-Day Program — all 15 weeks, warm-up scripts, progressions |
| `profiles.html` | Player profiles — roster-relative athlete ratings across six categories |

## Structure

```
index.html            Home
football.html         Football 4-day program
all-sport.html        All-sport 2-day program
profiles.html         Player profiles
assets/css/styles.css Site-wide styles
assets/js/            Program + athlete data and rendering
pdfs/                 Printable program documents
```

Program sessions and athlete ratings live as plain data in `assets/js/data-*.js` —
update the numbers there after each testing cycle and the pages re-render themselves.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Publish with GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**, select the branch and `/ (root)`
3. The site will be live at `https://<user>.github.io/<repo>/`
