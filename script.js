// Evidenziazione della sezione attiva nella navbar durante lo scroll
const navAnchors = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Funzionalità hamburger menu per dispositivi mobili
const toggleBtn = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});


