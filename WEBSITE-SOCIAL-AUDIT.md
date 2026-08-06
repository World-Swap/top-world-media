# Top World Media — Website & Social Media Audit

**Date:** August 6, 2026 (Part 2 added later the same day)
**Scope requested:** Full review of topworldmedia.com and associated social media, with recommendations to "take things to the next level."

> **Part 1** below is the initial framework written before any live data was
> available. **Part 2 — Live Audit Findings** (further down) is the real audit:
> the brand's actual public footprint as discovered via web search on
> August 6, 2026. Where Part 1 guessed, Part 2 corrects it.

---

# Part 1 — Initial findings & framework

## 1. What I could and couldn't inspect

This review session runs in a sandboxed environment whose network policy blocks
direct access to external websites (only package registries and search are
reachable). I could not load topworldmedia.com or open social media profiles
directly. I therefore audited the site's *public footprint* via search engines —
and that footprint itself is the headline finding.

The GitHub repository (`world-swap/top-world-media`) is currently **empty** —
no site code, no content, no history — so there was nothing to review on the
code side either.

## 2. Critical finding: the site is invisible to search engines

- A `site:topworldmedia.com` query returns **zero indexed pages**.
- Searches for the exact domain (`"topworldmedia.com"`) return no references
  to the site from any third party.
- No social media accounts (Instagram, Facebook, TikTok, YouTube, X) could be
  matched to the "Top World Media" brand by search.
  *(Superseded — the accounts exist under the **Top World Disc Golf** name;
  see Part 2.)*

If the site is live, this means one or more of the following:

1. **Not indexed** — missing/blocking `robots.txt`, a `noindex` meta tag left on
   from development, or the site was never submitted to Google Search Console /
   Bing Webmaster Tools.
2. **Very new domain** — not yet crawled, and with no inbound links to trigger
   crawling.
3. **Rendering barrier** — a JavaScript-only single-page app with no server-side
   rendering, or an aggressive bot-blocker (e.g., Cloudflare "challenge
   everything") that also blocks Googlebot.

**Why this is priority #1:** design and content improvements are worthless if no
one can find the site. Before any redesign, indexability must be fixed and
verified.

### Immediate actions (do these first)

- [ ] Visit `topworldmedia.com/robots.txt` — confirm it does not contain
      `Disallow: /`.
- [ ] View page source — confirm there is **no** `<meta name="robots" content="noindex">`.
- [ ] Register the domain in **Google Search Console** and **Bing Webmaster
      Tools**; submit a sitemap (`/sitemap.xml` — create one if missing).
- [ ] If behind Cloudflare, verify bot-fight/challenge settings allow verified
      search crawlers.
- [ ] Create/claim branded social handles consistently (see §4) and link them
      from the site footer with `sameAs` structured data — these links also help
      search engines discover and trust the domain.

## 3. What I need to complete the design & content review

Any one of these unblocks a full professional audit:

1. **Push the website source into this repository** (`world-swap/top-world-media`).
   I can then review structure, markup, performance patterns, accessibility,
   SEO metadata, and copy line-by-line, and ship improvements directly.
2. **Loosen the session's network policy** (Claude Code on the web →
   environment settings → network access) so the live site and social profiles
   can be fetched and screenshotted.
3. **Share exports/screenshots**: homepage and key pages (desktop + mobile),
   the platform/builder in use (WordPress, Wix, Squarespace, custom?), and the
   exact URLs of every social account.

## 4. Audit framework — what the full review will cover

### Website
| Area | What gets evaluated |
|---|---|
| First impression | 5-second test: is it obvious what Top World Media does and for whom? |
| Visual design | Typography hierarchy, color system, imagery quality, whitespace, consistency |
| Mobile experience | Responsive layout, tap targets, load behavior on 4G |
| Performance | Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms), image optimization |
| SEO | Titles/descriptions, heading structure, structured data, internal linking, sitemap |
| Conversion | Clear primary CTA per page, contact friction, trust signals (testimonials, logos) |
| Accessibility | Contrast, alt text, keyboard navigation, semantic HTML |

### Social media
| Area | What gets evaluated |
|---|---|
| Handle & brand consistency | Same name, logo, bio, and link across platforms |
| Platform fit | Which 1–2 platforms match the audience (don't spread thin across five) |
| Content pillars | 3–4 repeatable themes; mix of value / proof / personality / promotion |
| Cadence | Realistic sustainable schedule beats sporadic bursts |
| Cross-linking | Site ↔ social loop: every profile links the site; site footer links profiles |

## 5. Recommended sequence to "the next level"

1. **Week 1 — Be findable:** fix indexing (§2), claim consistent handles,
   set up Search Console + basic analytics (GA4 or Plausible).
2. **Week 2 — Foundation:** one-sentence positioning statement; rewrite
   homepage hero around it (what you do, for whom, proof, one CTA).
3. **Weeks 3–4 — Content engine:** pick 2 platforms; define 3 content
   pillars; batch-produce 2 weeks of posts; publish 2 cornerstone articles or
   videos on the site so social has somewhere to send people.
4. **Ongoing — Measure & iterate:** monthly check of traffic sources, top
   pages, follower growth, and which content pillar earns the most engagement;
   double down on what works.

---

# Part 2 — Live Audit Findings (August 6, 2026)

**How this was gathered:** this session's network policy still blocks direct
fetches of external sites (topworldmedia.com, YouTube, Instagram all return
proxy 403s), but web **search** works. Everything below comes from search
results and indexed snippets — solid for identity, links, and public
positioning; approximate for counts and dates. Items marked **verify** need a
30-second check from a normal browser.

## 6. The real public footprint

*Verified from the owner's account screenshots, Aug 6, 2026 (evening). The
search index still shows most accounts under the old "Top World Disc Golf"
names — the renames to Top World Media are done but haven't been re-crawled,
which is itself a finding: search engines don't yet connect the new brand to
any of these accounts.*

| Property | URL | Status (owner-verified) |
|---|---|---|
| YouTube | [`youtube.com/@Top-World-Media`](https://www.youtube.com/@Top-World-Media) (channel ID `UC_wa5cggx3IcCj_apJovh9w`) | **Renamed & active.** "Top World Media" · **10.5K subscribers · 878 videos** · links topworldmedia.com. Search engines still index it as "Top World Disc Golf." Recent uploads are surf clips getting 31–62 views (see §11). |
| TikTok | [`tiktok.com/@topworldmedia`](https://www.tiktok.com/@topworldmedia) | **Live — biggest non-YouTube audience: 1,301 followers · 3,695 likes.** Bio links the site and the YouTube handle. Invisible to search engines (earlier "no account found" was wrong — search simply can't see it). |
| Instagram | [`instagram.com/topworldmedia`](https://www.instagram.com/topworldmedia/) | **Renamed** (formerly `@topworlddiscgolf`). 447 followers · 769 following · 225 posts · Threads linked · 549 profile views/30 days. Category: "Sports Event" — change to a media/production category. |
| Threads | [`threads.net/@topworldmedia`](https://www.threads.net/@topworldmedia) | Linked from Instagram. |
| Facebook | [`facebook.com/100092203670692`](https://www.facebook.com/100092203670692) | **Renamed** to "Top World Media." 166 followers · 266 posts · Santa Cruz & Monterey County. Category: **"Sporting Goods Store" — wrong; change** to Media/Production Company. |
| X / Twitter | [`x.com/TopWorldDG`](https://x.com/TopWorldDG) | Live — most visible content is still $WORLD Coin promotion (see §8). |
| Old website | `topworlddiscgolf.com` | **Business closed** (owner-confirmed) — but the site is still live and indexed with a stale tour schedule. Redirect or take down; see §9. |
| New website | `topworldmedia.com` | Zero search presence. Render service (`top-world-media.onrender.com`) now deploys from `main`; domain not yet pointed. |
| Disc Golf Scene | [`discgolfscene.com/club/13056/top-world-disc-golf`](https://www.discgolfscene.com/club/13056/top-world-disc-golf) | Club listing: "Top World Disc Golf (Santa Cruz, California)." |

The site's channel cards and `sameAs` structured data now list all of these
(except X, pending §8). Getting topworldmedia.com live with those links, then
requesting re-indexing, is what teaches search engines the new identity —
right now a search for "Top World Media" finds none of your accounts.

## 7. The buried headline: you hosted the Santa Cruz Masters Cup

PDGA event listings confirm: **the 2025 Santa Cruz Masters Cup (MPO/FPO,
DGPT Q-Series), sponsored by DGA, was hosted by Top World Disc Golf** as part
of the 2025 Top World Disc Golf Tour, at DeLaveaga — one of the oldest and
most storied events in the sport ([pdga.com/tour/event/86442](https://www.pdga.com/tour/event/86442)).
The TWDG Tour has run PDGA-sanctioned C- through A-tier events at Kelley Park
(San Jose), DeLaveaga (Santa Cruz), and Boulder Creek Golf & Country Club.

This is the strongest trust signal the brand owns and it appeared nowhere on
the new site. It's now in the hero, story, and updates sections. Two follow-ups:

- The site claims the **2025** edition only (the 2026 Masters Cup is hosted
  by DeLaveaga Disc Golf Club), which is accurate — TWDG is now closed, and
  the hosting credential is presented as history, not an ongoing operation.

## 8. Brand-risk flag: the $WORLD Coin

The public face of two properties currently leads with a cryptocurrency:

- The YouTube channel's search snippet reads "…promote the **Top WORLD Disc
  Golf Coin on Coinbase Wallet**" — meaning the channel **About/description
  text leads with the coin**, and that's what Google displays for your channel.
- [`x.com/TopWorldDG`](https://x.com/TopWorldDG)'s visible pinned content is a
  Feb 2025 $WORLD Coin token-contract announcement.

No judgment on the venture itself — but as the front door of a media-production
business it works against you: prospective clients, sponsors (DGA, MVP,
Innova sponsor events at these courses), and the PDGA ecosystem will
search the brand and see a memecoin before they see a single frame of video.
Recommendation: move coin content to its own dedicated account/site, and
rewrite the YouTube About text to lead with tournament coverage and production
work (draft in the revival playbook). If the coin content was **not** posted
by you, treat both accounts as compromised and rotate credentials immediately.

## 9. Winding down topworlddiscgolf.com (business closed)

Top World Disc Golf is a closed business (owner-confirmed Aug 2026), so the
new site and all materials no longer link to it. But the old site is still
live and indexed with a 2025 tour schedule — a storefront that looks open
for a business that isn't. Wind it down deliberately:

1. **Best option — 301-redirect the whole domain to `topworldmedia.com`**
   for as long as the domain registration lasts. It transfers the old
   domain's search equity and back-links to the new brand, and anyone
   following an old link (PDGA pages, Disc Golf Scene, old flyers) lands
   somewhere current. Most hosts/registrars offer a domain-level redirect.
2. If redirecting isn't practical, **take the site down** and submit its
   URLs to Google's [Refresh Outdated Content tool](https://search.google.com/search-console/remove-outdated-content)
   so stale schedule pages stop surfacing.
3. Old **TWDG-named socials** (X `@TopWorldDG`, the Disc Golf Scene club
   page): either close them or post a single pinned "we've become Top World
   Media → topworldmedia.com" note. Don't leave them active-looking.

## 10. Revised priority list (supersedes §5)

1. **Fix YouTube packaging** — About text and coin scrub (§8), and repackage
   the surf uploads (§11). One hour of work, biggest single visibility win.
   ~~Verify handle~~ — done: `@Top-World-Media` confirmed.
2. **Deploy the new site + Search Console** — Render now deploys from `main`;
   point `topworldmedia.com` at it, then submit the sitemap. This is also
   what re-teaches search engines the renamed accounts (§6).
3. **Cross-link the active properties:** site ↔ YouTube ↔ TikTok ↔
   Instagram ↔ Facebook. Done on the site side (`sameAs` + channel cards);
   the closed TWDG properties are excluded (see §9).
4. ~~Claim TikTok~~ — it exists (`@topworldmedia`, 1,301 followers) and
   is your second-biggest audience. Fold it into the Shorts cross-posting
   loop as the *first* stop, not an afterthought.
5. **Fix platform categories:** Facebook is listed as "Sporting Goods Store"
   and Instagram as "Sports Event" — both should be a media/video-production
   category so profile search and recommendations work for the business.
6. **Execute the dated 90-day calendar** in `YOUTUBE-REVIVAL-PLAYBOOK.md`
   (anchored to real events: PDGA Pro Worlds Aug 26–30, Faultline Classic at
   DeLaveaga Sept 19–20, Odyssey Challenge Nov 14–15).

## 11. The views collapse, quantified (owner screenshots, §6)

The channel is **not dormant** — it pivoted. The three most recent uploads
(≈July 2026) are "Top World Surf Clips" (The Lane Parts One & Two, Nor-Cal),
23-minute raw session cuts, earning **31, 40, and 62 views** on a channel
with **10,500 subscribers** — roughly 0.3–0.6% of the subscriber base, with
brand-first titles and no-text thumbnails. This is the "rebrand trap" the
playbook warned about, measured: the audience subscribed for disc golf, the
algorithm learned it, and surf uploads packaged as "Top World Surf Clips"
give neither the subscribers nor search a reason to click. The playbook's
Phase 1 now addresses this directly — surf can absolutely stay (it's Santa
Cruz DNA and shows production range), but as a search-packaged secondary
pillar, with the disc golf comeback leading the revival.
