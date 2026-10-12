# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site with plain HTML, CSS and vanilla JS (per CLAUDE.md). GSAP + ScrollTrigger for motion. No React, Vue, Svelte or Tailwind. No new dependencies without asking. Formspree for the lead form (endpoint in `PUBLIC_FORMSPREE_ENDPOINT`).

## Users

Owner-operators of local service businesses in the San Francisco Bay Area. Priority niches: house cleaning, construction and remodeling, carpet cleaning. Also landscaping, roofing, pressure washing, HVAC, painting. They are busy, not marketers, and usually on a phone between jobs or after hours. They think in calls, quotes and booked jobs. Some serve Spanish-speaking customers.

Traffic is mixed (direct outreach, Instagram/Facebook, Google), so the page must work for a cold visitor who has never heard of GENCI.

## Product Purpose

GENCI is a video editing studio. Owners film raw clips on their phone during a job and send them; GENCI turns them into short, ready-to-post vertical videos for Instagram Reels, TikTok, YouTube Shorts, Facebook and Google ads. Success for the site is one action: the owner requests a free sample edit.

## Positioning

The owner only films and sends; GENCI handles everything after that, and every edit is built to make the phone ring (service and area clear, before/after up front) rather than to chase views. The language of each video is adapted to the client's customers.

## Operating Context

Owners already shoot before/after photos and clips on their phones at job sites. The videos run on Instagram Reels, TikTok, YouTube Shorts, Facebook and Google ads. Contact happens by form, call, text or email: (510) 393-0881, contact@genciinternational.com.

## Capabilities and Constraints

- Serves the San Francisco Bay Area. Never claim an office, a street address, or that the team is located there. Schema uses `areaServed` only.
- Language: adapted per client. Never claim fluency in any language.
- Contract: Visual Growth is month to month, billed in advance, no long-term commitment; cancel anytime before the next billing date; the client keeps every delivered video. The free sample has no revisions.
- Offer: free 30-second sample edit; "Visual Growth" plan at $360 a month (8 edited videos and 10 graphics a month, ready-to-post captions, posting calendar and guidance); custom proposals on request; the client chooses the format; 4 business days turnaround; 3 rounds of changes on each plan video before final delivery; requests answered daily.
- Detailed marketing context lives in `.claude/product-marketing.md`.

## Brand Commitments

- Name GENCI; logo at `/public/brand/GENCI.svg` used as is (artboard with three lockups: GC mark, mark + GENCI, mark + GENCI + INTERNATIONAL).
- Strict black, white and neutral grays. Color comes only from the videos.
- Type: TeX Gyre Adventor (final choice) for headlines, nav and buttons; Outfit for body; Syne for single highlighted words, numbers and labels.
- Domain: www.genciinternational.com
- Voice: American English, confident, premium, minimal, a little bold. No editing jargon, no exclamation points, no em dashes in short copy, no stock phrases.

## Evidence on Hand

- Five real client edits, with permission to show (originals in `video-sources/`, web versions in `public/videos/`). These are all the videos available; design around them rather than adding empty slots.
- No testimonials, client names, logos, review scores, results or client counts, by owner decision. Never fabricate them or add placeholders for them; highlight service facts instead.
- Human proof available: the founder's own photo and name (block ready in `src/components/Founder.astro`, shown once filled in `src/data/site.js`).

## Product Principles

1. Talk in the owner's outcomes: calls, quotes, booked jobs.
2. The work is the proof. Real before/after footage outranks any claim.
3. Ask for as little as possible: one action, four fields.
4. Honest gaps over invented proof: if a fact is missing, leave it out and ask the owner.
5. Phone first: the owner reads this between jobs.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, full keyboard navigation, visible focus, `prefers-reduced-motion` respected with a static fallback. Video language adapted to each client's customers.
