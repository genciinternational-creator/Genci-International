// Lead form: inline validation, fetch to Formspree, loading / success / error states.
const PHONE = '(510)&nbsp;393-0881';
const FALLBACK = `That didn’t go through. Call or text us at <a class="nobr" href="tel:+15103930881">${PHONE}</a> and we’ll set up your sample by phone.`;

const digits = (v) => {
  let d = v.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d;
};

const rules = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Enter your name.'),
  business_type: (v) => (v ? '' : 'Choose your type of business.'),
  mobile: (v) => (digits(v).length === 10 ? '' : 'Enter a 10-digit US mobile number, like (510) 555-0123.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter an email address, like you@yourbusiness.com.'),
  footage_link: (v) => {
    if (!v.trim()) return '';
    try {
      new URL(/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://${v.trim()}`);
      return '';
    } catch {
      return 'Paste the full link, or leave this empty and send clips later.';
    }
  },
};

export function initForm() {
  const form = document.querySelector('[data-lead]');
  if (!form) return;
  const done = document.querySelector('[data-done]');
  const status = form.querySelector('[data-status]');
  const submit = form.querySelector('[data-submit]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const touched = new Set();

  const fieldOf = (name) => form.elements.namedItem(name);
  const errOf = (input) => document.getElementById(`${input.id}-err`);

  const check = (name) => {
    const input = fieldOf(name);
    if (!input) return true;
    const message = rules[name](input.value);
    errOf(input).textContent = message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  };

  Object.keys(rules).forEach((name) => {
    const input = fieldOf(name);
    if (!input) return;
    input.addEventListener('blur', () => {
      if (input.value || touched.has(name)) {
        touched.add(name);
        check(name);
      }
      if (name === 'mobile' && digits(input.value).length === 10) {
        const d = digits(input.value);
        input.value = `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
      }
    });
    input.addEventListener(input.tagName === 'SELECT' ? 'change' : 'input', () => {
      if (touched.has(name)) check(name);
    });
  });

  const setLoading = (on) => {
    submit.disabled = on;
    submit.setAttribute('aria-disabled', String(on));
    submitLabel.textContent = on ? 'Sending…' : 'Get my free sample edit';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.innerHTML = '';
    const names = Object.keys(rules);
    names.forEach((n) => touched.add(n));
    const invalid = names.filter((n) => !check(n));
    if (invalid.length) {
      const first = fieldOf(invalid[0]);
      if (invalid[0] === 'footage_link') first.closest('details').open = true;
      first.focus();
      return;
    }
    if (!form.action || !/^https:\/\/formspree\.io\/f\//.test(form.action)) {
      status.innerHTML = FALLBACK;
      return;
    }

    const link = fieldOf('footage_link');
    if (link.value.trim() && !/^https?:\/\//i.test(link.value.trim())) link.value = `https://${link.value.trim()}`;

    setLoading(true);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Formspree ${response.status}`);
      form.hidden = true;
      done.hidden = false;
      done.focus();
      // Picked up by the optional ad tracking (src/components/Analytics.astro).
      window.dispatchEvent(new CustomEvent('genci:lead'));
    } catch {
      setLoading(false);
      status.innerHTML = FALLBACK;
    }
  });
}
