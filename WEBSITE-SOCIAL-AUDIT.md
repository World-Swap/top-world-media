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

## 6. The real public footprint (it exists — under the old name)

| Property | URL | Status |
|---|---|---|
| YouTube | `youtube.com/channel/UC_wa5cggx3IcCj_apJovh9w` — "Top World Disc Golf" | **Live & indexed.** This channel-ID URL is the one search engines know. The `@top-world-media` handle did not surface in any search result — **verify** it resolves. |
| Instagram | [`instagram.com/topworlddiscgolf`](https://www.instagram.com/topworlddiscgolf/) | **Live.** ~367 followers · 739 following · 128 posts. Bio: "Bringing you the best of the sport we all love." |
| Facebook | [`facebook.com/people/Top-World-Disc-Golf/100092203670692`](https://www.facebook.com/people/Top-World-Disc-Golf/100092203670692/) | **Live.** |
| X / Twitter | [`x.com/TopWorldDG`](https://x.com/TopWorldDG) | **Live** — but its most visible content is $WORLD Coin promotion (see §8). |
| TikTok | — | **No account found.** The handle `@topworldmedia` appears unclaimed — claim it. |
| Old website | [`topworlddiscgolf.com`](https://topworlddiscgolf.com) | **Still live**, with `/twdg-tour-schedule` and `/tournament-video-coverage` pages indexed. |
| New website | `topworldmedia.com` | **Still zero search presence.** Unreachable from this environment; **verify** DNS/deploy status. |
| Disc Golf Scene | [`discgolfscene.com/club/13056/top-world-disc-golf`](https://www.discgolfscene.com/club/13056/top-world-disc-golf) | Club listing: "Top World Disc Golf (Santa Cruz, California)." |

**Consequence for the site build:** the previous version of `index.html`
linked Instagram/TikTok at `@topworldmedia` — the Instagram link pointed at an
account that isn't yours and the TikTok link pointed at nothing. Both are now
fixed (real Instagram, TikTok card replaced with the real Facebook page).

## 7. The buried headline: you hosted the Santa Cruz Masters Cup

PDGA event listings confirm: **the 2025 Santa Cruz Masters Cup (MPO/FPO,
DGPT Q-Series), sponsored by DGA, was hosted by Top World Disc Golf** as part
of the 2025 Top World Disc Golf Tour, at DeLaveaga — one of the oldest and
most storied events in the sport ([pdga.com/tour/event/86442](https://www.pdga.com/tour/event/86442)).
The TWDG Tour has run PDGA-sanctioned C- through A-tier events at Kelley Park
(San Jose), DeLaveaga (Santa Cruz), and Boulder Creek Golf & Country Club.

This is the strongest trust signal the brand owns and it appeared nowhere on
the new site. It's now in the hero, story, and updates sections. Two follow-ups:

- The **2026** Masters Cup listings credit DeLaveaga Disc Golf Club as host,
  not TWDG — **verify** whether TWDG is still involved and word the site's
  claim accordingly (it currently claims the 2025 edition only, which is safe).
- `topworlddiscgolf.com`'s indexed tour-schedule content appears to still be
  the 2025 schedule. If no 2026 TWDG Tour is planned, say so somewhere; a
  visibly stale schedule page reads as "defunct."

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

## 9. Two-domain strategy

`topworlddiscgolf.com` (indexed, has history) and `topworldmedia.com` (new,
invisible) currently don't reference each other. Don't let them compete:

1. **Keep both, with jobs:** `topworlddiscgolf.com` = the tour (schedules,
   registration links, results); `topworldmedia.com` = the production house
   (portfolio, services, booking). Cross-link prominently in both directions —
   the new site now links the tour site from its story section.
2. Or **301-redirect** the disc golf domain's pages to sections of the new
   site if you truly won't run events again (loses less SEO than letting it rot).

Option 1 is recommended — the tour is proof-of-work for the production brand.

## 10. Revised priority list (supersedes §5)

1. **Verify & fix YouTube packaging** — handle, About text, coin scrub (§8).
   One hour of work, biggest single visibility win.
2. **Deploy the new site + Search Console** (unchanged from Part 1 — still
   zero pages indexed).
3. **Cross-link everything:** site ↔ tour site ↔ YouTube ↔ Instagram ↔
   Facebook. The `sameAs` structured data now lists the real accounts.
4. **Claim TikTok** `@topworldmedia` (or `@topworlddiscgolf` to match
   Instagram) before someone else does — even if you won't post yet.
5. **Instagram decision:** 367 followers means no lock-in. Either keep
   `@topworlddiscgolf` (audience-first, matches the channel) or rename to
   `@topworldmedia` — but whichever name wins, use it consistently on the
   site, and start cross-posting the YouTube Shorts there per the playbook.
6. **Execute the dated 90-day calendar** now in `YOUTUBE-REVIVAL-PLAYBOOK.md`
   (anchored to real events: PDGA Pro Worlds Aug 26–30, Faultline Classic at
   DeLaveaga Sept 19–20, Odyssey Challenge Nov 14–15).
