# GENCI: Product Marketing Context

Source of truth for copy, CRO and design skills. Facts here come from the owner's brief (2026-10-10).
Never invent facts on the site; if something is unknown, ask the owner.

## Product

- **Name:** GENCI (full lockup in the logo: Genci International).
- **What it is:** we turn raw phone footage from local service businesses into short videos and, on Lead Engine, run them as Facebook and Instagram ads, check them every week and replace the ones not bringing calls.
- **Where the videos run:** Instagram Reels, TikTok, YouTube Shorts, Facebook, Google ads.
- **Mechanism:** the owner films on their phone during a job and sends the clips. GENCI edits them into vertical videos the owner can post or run as ads.
- **Differentiator:** the owner only films and sends; every edit is built to bring calls and quotes (service, area and phone number clear, before and after up front).

## Audience (phase 1)

- **Who:** owner-operated service businesses in the San Francisco Bay Area.
- **Priority niches:** house cleaning, construction and remodeling, carpet cleaning.
- **Also served:** landscaping, roofing, pressure washing, HVAC, painting.
- **The visitor:** a busy owner, not a marketer. Usually on a phone, between jobs or after hours.
- **What they care about:** calls, quotes, booked jobs. Looking like the established company in town.
- **Words they use:** "videos for my Instagram", "TikTok", "ads", "before and after", "jobs", "quotes", "estimates", "leads", "my crew".
- **Words to avoid (editing jargon):** B-roll, color grading, LUT, cuts, pacing, hook, retention, content pipeline, deliverables, assets.
- **Language:** the language of each video is adapted to the client's customers. Never claim GENCI is fluent in or speaks any language; only say the language is adapted.

## Objections to answer

1. Will this work for my kind of business?
2. What footage do I need? (They have phone clips, not a camera crew.)
3. How fast do I get it back?
4. What if I do not like it?
5. How much does it cost?
6. I do not have time for marketing.

## Offer and conversion

- **Single goal:** request a free sample edit.
- **Button text (everywhere):** "Get my free sample edit".
- **Free sample:** one 30-second video edited from the owner's footage.
- **Plan "Visual Growth":** 8 edited videos a month; 10 graphics to promote services, reviews and offers; ready-to-post captions; a posting calendar plus guidance on how to use the content. Price: $360 a month.
- **Plan "Lead Engine" (featured, "Most complete"):** everything in Visual Growth, plus Facebook and Instagram ad setup and management, weekly testing, weak ads replaced with new versions, a one-page monthly report in plain English. $997 a month plus ad spend paid directly to Meta. Recommended ad spend from $900 a month (minimum $600). One-time setup $297. Month to month.
- **Ad account:** the client owns the account and the card; GENCI works inside it as a partner and never advances ad spend.
- **Results:** never promise leads, sales or cost per lead. Promise the process: test, measure, replace.
- **Founding client offer (off by default):** Lead Engine at $697 a month for the first 90 days, setup waived, limited to 3 businesses. Toggle `foundingOffer.enabled` in `src/data/site.js`.
- **Custom proposals:** more videos, Google Ads or several service areas.
- **Formats:** the client asks for the format they want.
- **Turnaround:** 4 business days.
- **Revisions:** 3 rounds of changes on each video, before final delivery.
- **Lead response:** GENCI answers requests every day.
- **Contract:** both plans month to month, billed in advance, no long-term commitment. Cancel anytime before the next billing date. The client keeps every delivered video. The free sample has no revisions.
- **Upsell, quiet:** "Need a website too? Ask us." (FAQ only.)

## Proof on hand

- No testimonials, client names, client logos, review scores, results or client counts. By owner decision the site shows none of these: the stats strip uses only service facts (4-day turnaround, 9:16 vertical, professional editing, ready for ads).
- No visible placeholders on the live site.
- Five real client edits, with permission to show: House Cleaning, Knai Builders CA (bathroom remodel), CARPET, 46 carpet cleaning, 46 junk removal. These are all the videos available; the site is built around them. ("Time to Preschool" exists but is off-niche and shows children, so it is not used.)

## Contact (use exactly)

- Email: contact@genciinternational.com
- Phone: (510) 393-0881
- Links: `tel:+15103930881`, `sms:+15103930881?&body=...` (pre-filled text), `mailto:contact@genciinternational.com?subject=Free%20sample%20edit`
- Form: Formspree, endpoint in `PUBLIC_FORMSPREE_ENDPOINT`.
- Email and phone appear only in the final section and footer, never in the hero. Mobile gets a sticky Call / Text bar.

## Geography rules

- GENCI serves the San Francisco Bay Area.
- Never claim an office, a street address, or that the team is located in the Bay Area.
- Schema uses `areaServed` only. No `address` anywhere.

## Voice

- American English. Confident, premium, minimal, a little bold.
- Specific over vague. Customer language over company language. Talk about calls, quotes and booked jobs.
- Forbidden: "it's not X, it's Y" reveals; "no X, no Y, no Z" lists; sentences that trail into extra comma clauses; "The result?" style reveals; stock phrases (unlock, seamless, game-changing, take it to the next level); exclamation points; em dashes in headlines and short copy.
- Never invent statistics, testimonials, client names, logos, reviews or turnaround guarantees.

## Identity

- Strict black, white and neutral grays. Color comes only from the videos.
- Logo: `/public/brand/GENCI.svg`, used as is. The file holds three lockups on one artboard: GC mark alone, mark + GENCI, mark + GENCI + INTERNATIONAL.
- Type: TeX Gyre Adventor (headlines, nav, buttons), Outfit (body), Syne (single highlighted words, numbers, labels).
- Domain: www.genciinternational.com
