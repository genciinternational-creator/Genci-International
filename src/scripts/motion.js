// GSAP motion. Loaded only when the visitor allows motion. Content is visible by default:
// states are set only on elements still below the fold, so nothing above it ever hides.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const belowFold = (el) => el.getBoundingClientRect().top > innerHeight * 0.92;

function headings() {
  document.querySelectorAll('.h2, .final__title').forEach((heading) => {
    if (!belowFold(heading)) return;
    SplitText.create(heading, {
      type: 'lines',
      mask: 'lines',
      aria: 'auto',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 105,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: heading, start: 'top 86%', once: true },
        });
      },
    });
  });
}

// The form and the contact links never animate in: they must be visible even if a script fails.
function groups() {
  const sets = [
    '.hl',
    '.board',
    '.spec__row',
    '.fares tbody tr',
    '.qa',
    '.ba__stage',
    '.niche-panel[data-active="true"] .reel',
  ];
  sets.forEach((selector) => {
    const items = [...document.querySelectorAll(selector)].filter(belowFold);
    if (!items.length) return;
    gsap.set(items, { autoAlpha: 0, y: 28 });
    ScrollTrigger.batch(items, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, overwrite: true }),
    });
  });

  // Pictograms enter from the direction their arrow points.
  document.querySelectorAll('.final .pict').forEach((el) => {
    if (!belowFold(el)) return;
    gsap.from(el, { x: -32, autoAlpha: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
}

function corridor() {
  const root = document.querySelector('[data-how]');
  if (!root) return;
  const fill = root.querySelector('[data-how-fill]');
  const stations = [...root.querySelectorAll('[data-station]')];
  const nums = stations.map((s) => s.querySelector('.station__num'));

  // Scroll-linked without pinning: the page never stops moving, and every sign stays
  // fully readable. The rail fills and each sign settles into place as it is reached.
  gsap.set(fill, { scaleY: 0 });
  gsap.set(stations, { x: 28 });
  gsap.set(nums, { scale: 0.6 });
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: root.querySelector('.corridor'), start: 'top 80%', end: 'bottom 55%', scrub: 0.6 },
  });
  tl.to(fill, { scaleY: 1, duration: stations.length }, 0);
  stations.forEach((s, i) => {
    tl.to(s, { x: 0, duration: 0.5, ease: 'power2.out' }, i * 0.9);
    tl.to(nums[i], { scale: 1, duration: 0.4, ease: 'back.out(2)' }, i * 0.9 + 0.1);
  });
}

export function initMotion() {
  document.fonts.ready.then(() => {
    headings();
    groups();
    corridor();
    ScrollTrigger.refresh();
  });
  return { gsap, ScrollTrigger };
}
