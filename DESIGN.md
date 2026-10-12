---
name: GENCI
description: Overhead-sign system for a video editing studio. Ink signs on a white concourse; color lives only inside video frames.
colors:
  sign-ink: "#0a0a0a"
  concourse-white: "#ffffff"
  platform-gray: "#f2f2f2"
  rule-gray: "#d4d4d4"
  signal-gray: "#737373"
  graphite-frame: "#3a3a3a"
typography:
  display:
    fontFamily: "GENCI Display (TeX Gyre Adventor), GENCI Display Fallback, sans-serif"
    fontSize: "clamp(2.125rem, 1.25rem + 3.9vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "GENCI Display, GENCI Display Fallback, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3.4vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "GENCI Display, GENCI Display Fallback, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Outfit, Outfit Fallback, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Syne, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    fontFeature: "'lnum' 1"
  numeral:
    fontFamily: "Syne, sans-serif"
    fontWeight: 800
    fontFeature: "'lnum' 1, 'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(72px, 9vw, 152px)"
  row: "20px"
  control: "56px"
components:
  button-sign:
    backgroundColor: "{colors.sign-ink}"
    textColor: "{colors.concourse-white}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "56px"
  button-sign-inverse:
    backgroundColor: "{colors.concourse-white}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.none}"
    height: "56px"
  arrow-square:
    backgroundColor: "{colors.concourse-white}"
    textColor: "{colors.sign-ink}"
    size: "56px"
  board-tab:
    backgroundColor: "{colors.sign-ink}"
    textColor: "{colors.concourse-white}"
    rounded: "{rounded.none}"
    height: "52px"
  board-tab-active:
    backgroundColor: "{colors.concourse-white}"
    textColor: "{colors.sign-ink}"
  input:
    backgroundColor: "{colors.concourse-white}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.none}"
    height: "54px"
    padding: "12px 14px"
  need-marker:
    backgroundColor: "{colors.platform-gray}"
    textColor: "{colors.sign-ink}"
    typography: "{typography.label}"
---

# Design System: GENCI

## Overview

**Creative North Star: "The Overhead Sign"**

The page is a route under overhead signs. Every section is a junction that carries one sign: one message, one arrow, one next step, and the route ends at the gate, which is the free sample edit. The grammar comes from international airport and freeway wayfinding, translated into strict black, white and four grays because the brand pins a monochrome palette. The yellow of an airport panel becomes sign ink.

Density alternates like a concourse: a dense ink sign, then quiet white floor with ruled tables, then another sign. The type is large and geometric, set in sentence case, one message per line. Video frames hang like concourse monitors, and they are the only place color appears on the page.

**Key Characteristics:**
- Full-bleed ink sign panels on a white ground, framed by a graphite hairline.
- Square corners everywhere; every control ends in a square arrow pictogram.
- Monumental Syne numerals in ink squares mark steps, gates and counts.
- A split-flap departures board as the signature interaction.
- Color only inside 9:16 video monitors.

## Colors

A monochrome sign palette: one ink, one white, four fixed grays, and nothing between them.

### Primary
- **Sign Ink** (#0a0a0a): every sign panel, primary button, numeral square, header band and the final gate section. Also all body text on white.

### Neutral
- **Concourse White** (#ffffff): the page ground, inverse buttons, arrow squares on ink, the form ticket.
- **Platform Gray** (#f2f2f2): empty video slots, field hover, the background of `[NEED]` markers.
- **Rule Gray** (#d4d4d4): table and list rules on white; secondary text on ink (13.6:1).
- **Signal Gray** (#737373): placeholders and dashed outlines of empty slots only (4.7:1 on white).
- **Graphite Frame** (#3a3a3a): the hairline that frames sign panels, flap cells on the board, secondary text on white (11.6:1).

### Named Rules
**The Four Grays Rule.** Grays come in four fixed steps. Never add an in-between tint, never tint a gray warm or cool.

**The Monitor Rule.** Color appears only inside video frames and their posters. No accent color, no colored icon, no colored state.

## Typography

**Display Font:** GENCI Display, set in TeX Gyre Adventor bold (with a metric-matched Arial fallback).
**Body Font:** Outfit (with a metric-matched Arial fallback)
**Label Font:** Syne, lining numerals always on

**Character:** Avant Garde's wide geometric letters do the speaking, like a sign face read from a distance. Outfit stays quiet for reading. Syne is the stamp: labels, numerals and at most one highlighted word per heading.

### Hierarchy
- **Display** (700, clamp(2.125rem, 1.25rem + 3.9vw, 5.5rem), 1.03): the hero sign only. Max 15ch.
- **Headline** (700, clamp(2rem, 1.2rem + 3.4vw, 4.25rem), 1.02): one per section. Max 18ch.
- **Title** (700, clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem), 1.05): step signs, the niche copy line, the gate message.
- **Body** (400, 1.0625rem, 1.55): copy and answers, 46 to 64ch.
- **Label** (Syne 700, 0.75rem, 0.14em tracking, uppercase): table heads, captions, video meta, form labels.

### Named Rules
**The One Stamp Rule.** A heading may set a single word in Syne 800. Never two, never a whole line.

**The Lining Figures Rule.** Syne numerals always render with `lnum`; its default old-style figures break the numeral squares.

## Layout

Mobile first with a 16px minimum gutter (clamp(16px, 4vw, 56px)) and a 1440px max width. A 12-column grid takes over at 1024px; sections split 5/7 or 6/6 with the heading on the left. Sections breathe on a clamp(72px, 9vw, 152px) rhythm, with more space above a heading than below it. Full-bleed sign panels extend past the container edge; their content still sits on the grid. Video rows scroll horizontally with snap on phones and become three equal columns at 900px. A fixed Call / Text bar sits at the bottom under 768px, and the page reserves its height.

## Elevation & Depth

The system is flat, with no shadows anywhere. Depth comes from value only: ink panels sit forward of the white floor and graphite hairlines frame them.

### Named Rules
**The Flat Sign Rule.** Signs never cast shadows. Hierarchy comes from ink versus white and from size.

## Shapes

Square corners on everything (0px). Rectangles are the only silhouette: panels, squares for pictograms and numerals, 9:16 monitors. Borders are 1px solid in ink, graphite or rule gray; dashed 1px marks only empty or invalid states.

## Components

### Buttons
- **Shape:** square corners (0px), 56px tall (44px small, 76 to 96px for the hero gate).
- **Sign button:** ink panel with white Avant Garde text, ending in a white square that holds a black arrow pictogram.
- **Inverse:** white panel, ink text, ink square with a white arrow; used on ink grounds.
- **Hover / Focus:** the arrow slides 4px toward where it points (0.35s, cubic-bezier(0.16, 1, 0.3, 1)). Focus is a 3px outline in the local foreground color, offset 3px.

### Inputs / Fields
- **Style:** white field, 1px ink stroke, square corners, 54px tall, Syne uppercase label above.
- **Focus:** 3px ink outline offset 2px.
- **Error:** the stroke turns 2px dashed and a bold message prefixed with "!" appears under the field. Never color alone.

### Navigation
- **Header:** an ink band holding only the logo (white, currentColor) and one inverse sign button. Sticky from 768px up.
- **Mobile bar:** two halves, Call on white and Text on ink, 64px plus the safe area.

### Departures Board (signature)
An ink panel with a "Now showing" label, a row of graphite flap cells holding Avant Garde capitals split by an ink hairline, and toggle buttons for each trade. Choosing a trade flips each changed cell through two letters to the new one (rotateX, 28ms stagger) and swaps the video row. Static under reduced motion.

### Video Monitor
A 9:16 frame with a graphite border. A lazy WebP poster shows first; a white play square and an ink meta tab sit on the bottom edge. The video loads only on click, and only one plays at a time.

### NEED Marker
Dashed 1px outline, platform gray fill, Syne at max(0.78em, 12px). It marks every fact the owner has not supplied yet and must never be styled away.

## Do's and Don'ts

### Do:
- **Do** end every action in a square arrow pictogram that points where it goes.
- **Do** keep one message per sign and one sign per section.
- **Do** set step and count numbers in Syne 800 with lining figures inside ink squares.
- **Do** keep posters lazy, videos `preload="none"`, muted and `playsinline`.
- **Do** respect reduced motion: every animated state has a visible static default.

### Don't:
- **Don't** add any color outside a video frame.
- **Don't** round a corner.
- **Don't** add shadows to panels, buttons or cards.
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** use glyphs or emoji as icons; pictograms are authored SVG on a 24px grid.
