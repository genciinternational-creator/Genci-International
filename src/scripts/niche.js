// Departures board: choosing a trade flaps the destination band and swaps the reels.
import { pauseWithin } from './videos.js';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const GLYPHS = 'ABCDEFGHIKLMNOPRSTUVW';
const NBSP = ' ';

let gsapRef = null;
let scrollTriggerRef = null;
export function provideGsap(gsap, scrollTrigger) {
  gsapRef = gsap;
  scrollTriggerRef = scrollTrigger;
}

function flapTo(flap, text) {
  const cells = [...flap.querySelectorAll('.flap__ch')];
  const target = text.padEnd(cells.length, ' ').split('').map((c) => (c === ' ' ? NBSP : c));

  cells.forEach((cell, i) => {
    const next = target[i];
    if (cell.textContent === next) return;
    if (!gsapRef || reduceMotion.matches) {
      cell.textContent = next;
      return;
    }
    gsapRef.killTweensOf(cell);
    const tl = gsapRef.timeline({ delay: i * 0.028 });
    // Two quick intermediate flaps, then the real letter.
    const steps = [GLYPHS[(i * 7 + next.charCodeAt(0)) % GLYPHS.length], GLYPHS[(i * 3 + 11) % GLYPHS.length], next];
    steps.forEach((ch, s) => {
      const last = s === steps.length - 1;
      tl.to(cell, { rotationX: -90, duration: 0.06, ease: 'power1.in' })
        .add(() => (cell.textContent = ch))
        .fromTo(cell, { rotationX: 90 }, { rotationX: 0, duration: last ? 0.16 : 0.06, ease: last ? 'expo.out' : 'none' });
    });
  });
}

export function initNiches() {
  const board = document.querySelector('[data-board]');
  if (!board) return;
  const flap = board.querySelector('[data-flap]');
  const tabs = [...board.querySelectorAll('[data-tab]')];
  const panels = [...document.querySelectorAll('[data-panel]')];

  const select = (tab, { focus = false } = {}) => {
    tabs.forEach((t) => t.setAttribute('aria-pressed', String(t === tab)));
    const id = tab.getAttribute('aria-controls');
    panels.forEach((p) => {
      const active = p.id === id;
      if (!active && p.dataset.active === 'true') pauseWithin(p);
      p.dataset.active = String(active);
    });
    flapTo(flap, tab.dataset.boardText);
    // Panels differ in height; recalculate scroll-linked positions further down the page.
    requestAnimationFrame(() => scrollTriggerRef?.refresh());
    if (focus) tab.focus();
  };

  // Links elsewhere on the page can open a trade, e.g. "Watch the full carpet edit".
  document.querySelectorAll('[data-show-niche]').forEach((link) => {
    link.addEventListener('click', () => {
      const tab = tabs.find((t) => t.id === `tab-${link.dataset.showNiche}`);
      if (tab) select(tab);
    });
  });

  // Ad links can open a trade directly: /?trade=carpet, /?trade=remodeling, /?trade=junk-removal ...
  const wanted = new URLSearchParams(location.search).get('trade')?.toLowerCase().trim();
  const fromLink = wanted && tabs.find((t) => t.dataset.aliases.split(' ').includes(wanted));
  if (fromLink) select(fromLink);

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      const next = tabs[(i + keys[e.key] + tabs.length) % tabs.length];
      select(next, { focus: true });
    });
  });
}
