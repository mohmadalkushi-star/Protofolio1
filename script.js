/* ══════════════════════════════════════
   محمد خالد | Data Analyst Portfolio
   script.js
══════════════════════════════════════ */

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ── Mobile Menu ── */
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

/* ── Active Nav on Scroll ── */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const y = window.scrollY + 80;
  sections.forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
        a.classList.remove("active");
        a.style.color = "";
        if (a.getAttribute("href") === "#" + s.id) {
          a.style.color = "var(--teal)";
        }
      });
    }
  });
});

/* ── Project Tabs ── */
function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  // Update panels
  document.querySelectorAll(".projects-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === "panel-" + tabName);
  });
  // Re-trigger reveal for newly visible cards
  document.querySelectorAll("#panel-" + tabName + " .reveal").forEach(el => {
    revealObserver.observe(el);
  });
}
