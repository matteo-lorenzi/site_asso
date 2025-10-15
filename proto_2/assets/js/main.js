// ============================================
// MAIN JS - Poitou en Scène
// Script principal
// ============================================

(function () {
  "use strict";

  // ========== VARIABLES GLOBALES ==========
  const header = document.getElementById("header");
  const burgerBtn = document.getElementById("burger-btn");
  const mainMenu = document.getElementById("main-menu");
  const body = document.body;

  let lastScrollY = window.scrollY;
  let ticking = false;

  // ========== MENU BURGER (MOBILE) ==========

  /**
   * Toggle le menu mobile
   */
  function toggleMenu() {
    const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded
    burgerBtn.setAttribute("aria-expanded", !isExpanded);

    // Toggle classe active sur le menu
    mainMenu.classList.toggle("is-active");

    // Empêcher le scroll du body quand menu ouvert
    body.classList.toggle("menu-open");
  }

  /**
   * Ferme le menu mobile
   */
  function closeMenu() {
    burgerBtn.setAttribute("aria-expanded", "false");
    mainMenu.classList.remove("is-active");
    body.classList.remove("menu-open");
  }

  // Event listener sur le bouton burger
  if (burgerBtn) {
    burgerBtn.addEventListener("click", toggleMenu);
  }

  // Fermer le menu quand on clique sur un lien (mobile)
  const menuLinks = document.querySelectorAll(".header__menu-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1200) {
        closeMenu();
      }
    });
  });

  // Fermer le menu mobile lors du redimensionnement vers desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      closeMenu();
    }
  });

  // ========== SCROLL HEADER ==========

  /**
   * Gère l'apparition/disparition du header au scroll
   */
  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (!header) return;

    // Si on scroll vers le bas et qu'on est pas tout en haut
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      // Si on scroll vers le haut ou qu'on est en haut
      header.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  }

  // Optimisation du scroll avec requestAnimationFrame
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ========== SMOOTH SCROLL ==========

  /**
   * Smooth scroll pour les ancres internes
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore les liens "#" vides
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ========== INTERSECTION OBSERVER (ANIMATIONS AU SCROLL) ==========

  /**
   * Observe les éléments et ajoute des classes d'animation quand ils entrent dans le viewport
   */
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        // On arrête d'observer une fois l'animation déclenchée
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer les sections et cards
  const elementsToAnimate = document.querySelectorAll(
    ".section, .card, .discipline-card"
  );
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });

  // ========== PARALLAX HERO ==========

  /**
   * Effet parallax subtil sur l'image hero
   */
  function parallaxHero() {
    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero__image");

    if (!hero || !heroImage) return;

    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // Appliquer le parallax seulement si on est dans la zone du hero
    if (scrolled < heroHeight) {
      const parallaxValue = scrolled * 0.5;
      const maxParallax = 20; // Variable CSS --parallax-max
      const limitedParallax = Math.min(parallaxValue, maxParallax);

      heroImage.style.transform = `translateY(${limitedParallax}px)`;
    }
  }

  // Appliquer le parallax au scroll (optimisé)
  let parallaxTicking = false;
  window.addEventListener("scroll", () => {
    if (!parallaxTicking) {
      window.requestAnimationFrame(() => {
        parallaxHero();
        parallaxTicking = false;
      });
      parallaxTicking = true;
    }
  });

  // ========== FORM VALIDATION ==========

  /**
   * Validation basique des formulaires
   */
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      // Récupérer tous les champs requis
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        // Retirer les anciens messages d'erreur
        const existingError = field.parentElement.querySelector(".form-error");
        if (existingError) {
          existingError.remove();
        }

        // Valider
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");

          // Ajouter message d'erreur
          const errorMsg = document.createElement("span");
          errorMsg.className = "form-error";
          errorMsg.textContent = "Ce champ est requis";
          field.parentElement.appendChild(errorMsg);
        } else {
          field.classList.remove("error");
        }

        // Validation email
        if (field.type === "email" && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.classList.add("error");

            const errorMsg = document.createElement("span");
            errorMsg.className = "form-error";
            errorMsg.textContent = "Email invalide";
            field.parentElement.appendChild(errorMsg);
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
        // Scroller vers le premier champ en erreur
        const firstError = form.querySelector(".error");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          firstError.focus();
        }
      }
    });

    // Retirer l'erreur quand l'utilisateur tape
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error");
        const errorMsg = this.parentElement.querySelector(".form-error");
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  });

  // ========== UTILITAIRES ==========

  /**
   * Log de bienvenue dans la console
   */
  console.log(
    "%c🎭 Poitou en Scène",
    "font-size: 24px; font-weight: bold; color: #8C3B2F;"
  );
  console.log(
    "%cPoitiers Capitale Européenne de la Culture 2026",
    "font-size: 14px; color: #1E3250;"
  );

  // ========== INITIALISATION ==========

  /**
   * Init au chargement de la page
   */
  function init() {
    console.log("✅ Site initialisé");

    // Ajouter classe pour indiquer que JS est chargé
    document.documentElement.classList.add("js-loaded");
  }

  // Attendre que le DOM soit prêt
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
