const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
};

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
const resumes = {
  sde: {
    title: "Software Development Engineer",
    desc: "Focused on DSA, OOP, backend systems, APIs, and scalable architecture.",
    file: "resumes/resume_sde.pdf"
  },
  ds: {
    title: "Data Science / Data Analyst",
    desc: "Focused on SQL, Python, Power BI, analytics, KPIs, and ML workflows.",
    file: "resumes/resume_ds.pdf"
  },
  nonit: {
    title: "Non-IT / Operations / Analyst",
    desc: "Focused on business analytics, reporting, operations insights, and Excel/BI tools.",
    file: "resumes/resume_nonit.pdf"
  }
};

function showResume(role) {
  document.getElementById("resumeTitle").textContent = resumes[role].title;
  document.getElementById("resumeDesc").textContent = resumes[role].desc;
  document.getElementById("resumeFrame").src = resumes[role].file;
  document.getElementById("resumeDownload").href = resumes[role].file;
}
