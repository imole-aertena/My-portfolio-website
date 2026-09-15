document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Typewriter role effect ---------------- */
  const changingTxt = document.querySelector(".d-word");
  const words = ["Developer", "Athlete", "Cinematographer", "Writer", "Engineer"];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!changingTxt) return;
    const currentWord = words[wordIndex];

    changingTxt.textContent = isDeleting
      ? currentWord.substring(0, charIndex - 1)
      : currentWord.substring(0, charIndex + 1);

    charIndex += isDeleting ? -1 : 1;

    let typeSpeed = isDeleting ? 70 : 130;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }
    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Active nav link on scroll ---------------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-cont a");

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------- GSAP scroll reveals ---------------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const reveal = (selector, vars) => {
      const el = document.querySelector(selector);
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        duration: 1.2,
        ease: "power2.out",
        ...vars,
      });
    };

    reveal(".hero-eyebrow", { opacity: 0, y: -20 });
    reveal(".hero-name", { opacity: 0, y: 40 });
    reveal(".hero-ctn .sub-txt", { opacity: 0, y: 20, delay: 0.15 });
    reveal(".hero-actions", { opacity: 0, y: 20, delay: 0.25 });
    reveal(".hero-portrait", { opacity: 0, scale: 0.92 });
    reveal(".section-hdg", { opacity: 0, y: 30 });

    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".skill-chips li").forEach((chip, i) => {
      gsap.from(chip, {
        scrollTrigger: { trigger: chip, start: "top 95%", toggleActions: "play none none reverse" },
        opacity: 0,
        x: -20,
        duration: 0.6,
        delay: (i % 4) * 0.08,
        ease: "power2.out",
      });
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  }
});
