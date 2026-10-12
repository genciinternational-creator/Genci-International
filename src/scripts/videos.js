// Video rules: posters first, nothing loads until needed, one player at a time.
// Only the hero reel autoplays; everything else loads on click.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const saveData = navigator.connection?.saveData === true;
const players = new Set();

function register(video, group = null) {
  video.dataset.group = group ?? '';
  players.add(video);
  video.addEventListener('play', () => {
    for (const other of players) {
      if (other === video || other.paused) continue;
      if (group && other.dataset.group === group) continue;
      other.pause();
    }
  });
}

/* Hero reel */
function initHero() {
  const video = document.querySelector('[data-hero]');
  const toggle = document.querySelector('[data-reel-toggle]');
  if (!video || !toggle) return;
  register(video, 'hero');

  let userPaused = reduceMotion.matches || saveData;
  let inView = true;
  const label = toggle.querySelector('.reel-toggle__label');

  const load = () => {
    if (!video.src) video.src = video.dataset.src;
  };
  const sync = () => {
    const playing = !video.paused;
    label.textContent = playing ? 'Pause' : 'Play';
    toggle.setAttribute('aria-pressed', String(!playing));
    toggle.setAttribute('aria-label', playing ? 'Pause the client edits montage' : 'Play the client edits montage');
  };
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);

  toggle.hidden = false;
  sync();

  toggle.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false;
      load();
      video.play().catch(() => {});
    } else {
      userPaused = true;
      video.pause();
    }
  });

  // Pause off screen to save battery; resume only if the visitor did not pause it.
  new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      if (!inView && !video.paused) video.pause();
      else if (inView && !userPaused && video.src && video.paused) video.play().catch(() => {});
    },
    { threshold: 0.2 }
  ).observe(video);

  if (userPaused) return;
  const start = () => {
    if (userPaused || !inView) return;
    load();
    video.play().catch(() => sync());
  };
  // Wait for the page to finish loading so the reel never competes with the headline.
  const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 2500 }) : setTimeout(start, 600));
  if (document.readyState === 'complete') idle();
  else addEventListener('load', idle, { once: true });
}

/* Niche reels: swap the poster for a video on click. */
function initReels() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-play]');
    if (!button) return;
    const frame = button.closest('[data-reel]');
    const video = document.createElement('video');
    video.src = frame.dataset.src;
    video.poster = frame.dataset.poster;
    video.muted = true;
    video.playsInline = true;
    video.controls = true;
    video.preload = 'auto';
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-label', `Video${button.querySelector('.sr-only')?.textContent ?? ''}`);
    video.width = 720;
    video.height = 1280;
    register(video);
    frame.append(video);
    button.remove();
    frame.querySelector('img')?.setAttribute('aria-hidden', 'true');
    video.focus({ preventScroll: true });
    video.play().catch(() => {});
  });
}

export function pauseWithin(root) {
  root.querySelectorAll('video').forEach((v) => v.pause());
}

export function initVideos() {
  initHero();
  initReels();
}
