const revealItems = document.querySelectorAll('.reveal');
const openingScreen = document.querySelector('#opening-screen');
const openingButton = document.querySelector('#open-invitation');
const petalLayer = document.querySelector('#petal-layer');
const nasheedAudio = document.querySelector('#nasheed-audio');
const musicToggle = document.querySelector('#music-toggle');
const musicLabel = musicToggle.querySelector('.music-label');

const createPetals = () => {
  if (petalLayer.childElementCount) return;
  for (let index = 0; index < 46; index += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.setProperty('--left', `${Math.round(Math.random() * 100)}%`);
    petal.style.setProperty('--size', `${6 + Math.round(Math.random() * 6)}px`);
    petal.style.setProperty('--duration', `${11 + Math.round(Math.random() * 7)}s`);
    petal.style.setProperty('--delay', `${(Math.random() * 8).toFixed(2)}s`);
    petal.style.setProperty('--sway', `${-90 + Math.round(Math.random() * 180)}px`);
    petalLayer.appendChild(petal);
  }
};

const updateMusicControl = () => {
  const playing = !nasheedAudio.paused;
  musicToggle.classList.toggle('is-playing', playing);
  musicToggle.setAttribute('aria-pressed', String(playing));
  musicToggle.setAttribute('aria-label', playing ? 'Pause nasheed' : 'Play nasheed');
  musicLabel.textContent = playing ? 'Sound on' : 'Sound off';
};

const playNasheed = () => {
  nasheedAudio.play().then(updateMusicControl).catch(updateMusicControl);
};

const openInvitation = () => {
  if (openingScreen.classList.contains('is-opening')) return;
  openingScreen.classList.add('is-opening');
  document.body.classList.add('invitation-open');
  createPetals();
  playNasheed();
  window.setTimeout(() => openingScreen.classList.add('is-hidden'), 1250);
};

openingButton.addEventListener('click', openInvitation);
openingButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openInvitation();
  }
});

musicToggle.addEventListener('click', () => {
  if (nasheedAudio.paused) playNasheed();
  else nasheedAudio.pause();
  updateMusicControl();
});
nasheedAudio.addEventListener('play', updateMusicControl);
nasheedAudio.addEventListener('pause', updateMusicControl);
nasheedAudio.addEventListener('ended', updateMusicControl);

const setupCalendarLinks = () => {
  const calendarLink = document.querySelector('#add-to-calendar');
  if (!calendarLink) return;

  const browserNavigator = typeof navigator !== 'undefined' ? navigator : {};
  const userAgent = browserNavigator.userAgent || '';
  const isAppleDevice = /iPad|iPhone|iPod/.test(userAgent) || (browserNavigator.platform === 'MacIntel' && browserNavigator.maxTouchPoints > 1);
  const appleCalendarHref = calendarLink.dataset.appleHref;
  const googleCalendarHref = calendarLink.dataset.googleHref;
  if (isAppleDevice) {
    calendarLink.href = appleCalendarHref;
    calendarLink.removeAttribute('target');
    calendarLink.setAttribute('download', 'Faizan-Yasmin-Wedding.ics');
  } else {
    calendarLink.href = googleCalendarHref;
    calendarLink.target = '_blank';
  }
};

setupCalendarLinks();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  observer.observe(item);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const countdownTarget = new Date('2027-01-02T10:00:00+05:30').getTime();
const countdownUnits = {
  days: document.querySelector('[data-countdown="days"]'),
  hours: document.querySelector('[data-countdown="hours"]'),
  minutes: document.querySelector('[data-countdown="minutes"]'),
  seconds: document.querySelector('[data-countdown="seconds"]'),
};

const updateCountdown = () => {
  const remaining = Math.max(0, countdownTarget - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  countdownUnits.days.textContent = String(days).padStart(2, '0');
  countdownUnits.hours.textContent = String(hours).padStart(2, '0');
  countdownUnits.minutes.textContent = String(minutes).padStart(2, '0');
  countdownUnits.seconds.textContent = String(seconds).padStart(2, '0');
};

updateCountdown();
window.setInterval(updateCountdown, 1000);

