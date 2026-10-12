// Before/after divider: pointer drag on the frame, keyboard through the range input.
export function initSlider() {
  const stage = document.querySelector('[data-ba]');
  if (!stage) return;
  const frame = stage.querySelector('.ba__frame');
  const range = stage.querySelector('[data-ba-range]');

  const set = (pct) => {
    const v = Math.min(100, Math.max(0, pct));
    stage.style.setProperty('--pos', `${v}%`);
    range.value = String(Math.round(v));
    range.setAttribute('aria-valuetext', `${Math.round(100 - v)}% of the after photo showing`);
  };

  const fromEvent = (e) => {
    const r = frame.getBoundingClientRect();
    return ((e.clientX - r.left) / r.width) * 100;
  };

  // Batch moves to one update per frame.
  let queued = null;
  const setSoon = (pct) => {
    if (queued === null) requestAnimationFrame(() => { set(queued); queued = null; });
    queued = pct;
  };

  let dragging = false;
  let decided = false;
  let startX = 0;
  let startY = 0;

  // The photos are images: stop the browser's native image drag from hijacking the gesture.
  frame.addEventListener('dragstart', (e) => e.preventDefault());

  frame.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    decided = e.pointerType === 'mouse';
    startX = e.clientX;
    startY = e.clientY;
    if (decided) {
      e.preventDefault();
      frame.setPointerCapture(e.pointerId);
      set(fromEvent(e));
    }
  });
  frame.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    if (!decided) {
      // On touch, only take over once the gesture is clearly horizontal; vertical swipes scroll the page.
      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);
      if (dx < 6 && dy < 6) return;
      if (dy > dx) {
        dragging = false;
        return;
      }
      decided = true;
      frame.setPointerCapture(e.pointerId);
    }
    setSoon(fromEvent(e));
  });
  const end = () => (dragging = false);
  // A tap without a drag moves the divider too (single-pointer alternative to dragging).
  frame.addEventListener('pointerup', (e) => {
    const still = Math.abs(e.clientX - startX) < 6 && Math.abs(e.clientY - startY) < 6;
    if (dragging && !decided && still) set(fromEvent(e));
    end();
  });
  frame.addEventListener('pointercancel', end);
  frame.addEventListener('lostpointercapture', end);

  range.addEventListener('input', () => set(Number(range.value)));
  set(Number(range.value));
}
