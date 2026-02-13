// Theme toggle (dark by default)
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(name){
  if(name === 'light'){
    document.body.setAttribute('data-theme','light');
    themeToggle && (themeToggle.textContent = '🌞');
    localStorage.setItem('theme','light');
  } else {
    document.body.removeAttribute('data-theme');
    themeToggle && (themeToggle.textContent = '🌗');
    localStorage.setItem('theme','dark');
  }
}
themeToggle && themeToggle.addEventListener('click', ()=>{
  const cur = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  applyTheme(cur === 'light' ? 'dark' : 'light');
});
if(localStorage.getItem('theme') === 'light') applyTheme('light'); else applyTheme('dark');

// Mobile nav
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle && navToggle.addEventListener('click', ()=> navList.classList.toggle('open'));
document.querySelectorAll('#nav-list a').forEach(a => a.addEventListener('click', ()=> navList.classList.remove('open')));

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
function runReveal(){
  reveals.forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', runReveal);
window.addEventListener('resize', runReveal);
document.addEventListener('DOMContentLoaded', runReveal);

// Resume hub mapping
const resumes = {
  sde: {
    title: 'Software Development Engineer',
    desc: 'Resume tailored for SDE roles, highlighting system design and coding projects.',
    file: 'resumes/resume_sde.pdf'
  },
  ds: {
    title: 'Data Science / Analytics',
    desc: 'Resume tailored for Data Science & Analytics roles with SQL, ML and visualization highlights.',
    file: 'resumes/resume_ds.pdf'
  },
  nonit: {
    title: 'Non-IT / Operations',
    desc: 'Resume tailored for non-technical roles focusing on operations, analytics and reporting.',
    file: 'resumes/resume_nonit.pdf'
  }
};

document.querySelectorAll('.resume-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.dataset.key;
    const data = resumes[key] || resumes.sde;
    document.getElementById('resume-title').textContent = data.title;
    document.getElementById('resume-desc').textContent = data.desc;
    document.getElementById('resume-iframe').src = data.file;
    document.getElementById('resume-download').href = data.file;
    // active state
    document.querySelectorAll('.resume-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});
// default
document.addEventListener('DOMContentLoaded', ()=>{
  const defaultBtn = document.querySelector('.resume-btn[data-key="sde"]');
  defaultBtn && defaultBtn.click();
});

// Parallax / micro-interaction for girl illustration
const hero = document.querySelector('.hero');
const girl = document.querySelector('.girl-anim');
if(hero && girl){
  hero.addEventListener('mousemove', (e)=>{
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const tx = x * 18; const ty = y * 12; const rot = x * 4;
    girl.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
  });
  hero.addEventListener('mouseleave', ()=> girl.style.transform = 'translate(0,0) rotate(0)');
}
