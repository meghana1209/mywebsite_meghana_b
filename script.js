
/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.removeAttribute('data-theme');
    if (themeToggle) themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

// Toggle click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
});


/* =========================
   MOBILE NAVIGATION
========================= */

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
    });
  });
}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll('.reveal');

function runReveal() {
  const triggerBottom = window.innerHeight - 100;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', runReveal);
window.addEventListener('resize', runReveal);
document.addEventListener('DOMContentLoaded', runReveal);


/* =========================
   RESUME HUB SWITCHER
========================= */

const resumeData = {
  sde: {
    title: 'Software Development Engineer',
    desc: 'Resume tailored for SDE roles, emphasizing coding, backend systems, and scalable architecture.',
    file: 'resumes/resume_sde.pdf'
  },
  ds: {
    title: 'Data Science / Analytics',
    desc: 'Resume tailored for Data Science & Analytics roles highlighting SQL, Python, ML, and dashboards.',
    file: 'resumes/resume_ds.pdf'
  },
  nonit: {
    title: 'Non-IT / Operations',
    desc: 'Resume tailored for operations, analytics, reporting, and business insights roles.',
    file: 'resumes/resume_nonit.pdf'
  }
};

const resumeButtons = document.querySelectorAll('.resume-btn');
const resumeTitle = document.getElementById('resume-title');
const resumeDesc = document.getElementById('resume-desc');
const resumeIframe = document.getElementById('resume-iframe');
const resumeDownload = document.getElementById('resume-download');

function updateResume(key) {
  const data = resumeData[key] || resumeData.sde;

  if (resumeTitle) resumeTitle.textContent = data.title;
  if (resumeDesc) resumeDesc.textContent = data.desc;
  if (resumeIframe) resumeIframe.src = data.file;
  if (resumeDownload) resumeDownload.href = data.file;

  resumeButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.resume-btn[data-key="${key}"]`)?.classList.add('active');
}

// Attach listeners
resumeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    updateResume(key);
  });
});

// Default resume on load
document.addEventListener('DOMContentLoaded', () => {
  updateResume('sde');
});


/* =========================
   HERO PARALLAX EFFECT
========================= */

const hero = document.querySelector('.hero');
const girl = document.querySelector('.girl-anim');

if (hero && girl) {

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const translateX = x * 20;
    const translateY = y * 15;
    const rotate = x * 5;

    girl.style.transform =
      `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
  });

  hero.addEventListener('mouseleave', () => {
    girl.style.transform = 'translate(0, 0) rotate(0)';
  });
}
