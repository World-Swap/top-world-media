# Top World Media — Website

The official site for **Top World Media** (formerly Top World Disc Golf):
media production & content creation. A fast, dependency-free static site —
plain HTML/CSS/JS, no build step.

## Structure

```
index.html          Single-page site (hero, story, services, channels, updates, contact)
css/style.css       Brand stylesheet (navy #1E3A6E · red #E5372E · ink #0A0D12)
js/main.js          Mobile nav, timecode ticker, scroll reveals
404.html            Not-found page
favicon.svg         Globe + play-button mark
robots.txt          Crawl-allowed + sitemap pointer  ← fixes the indexing problem
sitemap.xml         Submit this in Google Search Console
.github/workflows/  GitHub Pages deploy (runs on push to main)
```

## Before launch — fill in the placeholders

Search for `TODO` in `index.html`:

1. **Social handles** — YouTube is confirmed as
   [`@top-world-media`](https://www.youtube.com/@top-world-media). TikTok and
   Instagram channel-card URLs (and the `sameAs` list in the JSON-LD block in
   `<head>`) are still set to the `@topworldmedia` placeholder.
2. **Contact email** — currently `hello@topworldmedia.com`.

## Deploy

1. Merge this branch to `main` — the included workflow publishes to GitHub Pages
   (enable **Settings → Pages → Source: GitHub Actions** once).
2. Point the domain: in **Settings → Pages → Custom domain** enter
   `topworldmedia.com`, then at your DNS provider add a `CNAME` record for
   `www` → `world-swap.github.io` and `A` records for the apex per
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. **Fix discoverability (critical):** the current site has zero pages indexed
   by Google. After deploy, add the domain in
   [Google Search Console](https://search.google.com/search-console), submit
   `https://topworldmedia.com/sitemap.xml`, and request indexing.

## Related docs

- [`WEBSITE-SOCIAL-AUDIT.md`](WEBSITE-SOCIAL-AUDIT.md) — initial audit findings
- [`YOUTUBE-REVIVAL-PLAYBOOK.md`](YOUTUBE-REVIVAL-PLAYBOOK.md) — guided plan to
  revive the 10K-subscriber YouTube channel
