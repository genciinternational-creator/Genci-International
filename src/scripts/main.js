import { initVideos } from './videos.js';
import { initNiches, provideGsap } from './niche.js';
import { initSlider } from './slider.js';
import { initForm } from './form.js';

initVideos();
initNiches();
initSlider();
initForm();

// Motion is an enhancement: load GSAP after first paint, and never under reduced motion.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches) {
  const load = () =>
    import('./motion.js').then(({ initMotion }) => {
      const { gsap, ScrollTrigger } = initMotion();
      provideGsap(gsap, ScrollTrigger);
    });
  if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 1200 });
  else setTimeout(load, 300);
}
