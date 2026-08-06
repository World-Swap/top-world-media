// Mobile nav
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Hero timecode ticker
const tc = document.getElementById('timecode');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (tc && !reduced) {
  let frames = 0;
  const pad = (n) => String(n).padStart(2, '0');
  setInterval(() => {
    frames = (frames + 1) % (24 * 60 * 60 * 24);
    const f = frames % 24;
    const s = Math.floor(frames / 24) % 60;
    const m = Math.floor(frames / (24 * 60)) % 60;
    const h = Math.floor(frames / (24 * 60 * 60));
    tc.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  }, 1000 / 24);
}

// Scroll reveal
const revealables = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduced) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('in'));
}
