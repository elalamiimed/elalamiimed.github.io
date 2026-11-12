/* Mohamed El Alami — academic CV site
   Minimal, dependency-free progressive enhancement. */
(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = ["research", "projects", "foundation", "education", "teaching"]
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  /* ---------- Mobile navigation ---------- */
  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });
  }

  /* ---------- Active section in navigation ---------- */
  if (sections.length && "IntersectionObserver" in window) {
    var visible = {};

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });

        var current = null;
        sections.forEach(function (section) {
          if (visible[section.id]) current = section.id;
        });

        navLinks.forEach(function (link) {
          var target = (link.getAttribute("href") || "").replace("#", "");
          link.classList.toggle("is-active", target === current);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
