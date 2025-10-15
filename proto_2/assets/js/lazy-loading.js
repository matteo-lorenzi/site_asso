/**
 * Lazy Loading Images with Intersection Observer
 * Optimise le chargement des images pour améliorer les performances
 */

(function () {
  "use strict";

  // Configuration
  const config = {
    rootMargin: "50px 0px", // Commence à charger 50px avant d'être visible
    threshold: 0.01, // Se déclenche dès qu'1% est visible
  };

  /**
   * Charge une image en lazy
   * @param {HTMLImageElement} img - L'élément image à charger
   */
  function loadImage(img) {
    // Éviter de charger plusieurs fois
    if (img.classList.contains("loaded")) return;

    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (!src && !srcset) return;

    // Gérer le srcset si présent
    if (srcset) {
      img.srcset = srcset;
    }

    // Charger l'image principale
    if (src) {
      img.src = src;
    }

    // Callback quand l'image est chargée
    img.onload = function () {
      img.classList.add("loaded");
      img.classList.add("fade-in");
      img.removeAttribute("data-src");
      img.removeAttribute("data-srcset");
    };

    // Gérer les erreurs de chargement
    img.onerror = function () {
      console.warn("Erreur de chargement pour:", src || srcset);
      img.classList.add("load-error");
    };
  }

  /**
   * Initialise le lazy loading avec Intersection Observer
   */
  function initLazyLoading() {
    // Sélectionner toutes les images avec data-src
    const lazyImages = document.querySelectorAll(
      "img[data-src], img[data-srcset]"
    );

    // Si le navigateur ne supporte pas IntersectionObserver, charger directement
    if (!("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver non supporté, chargement direct des images"
      );
      lazyImages.forEach(loadImage);
      return;
    }

    // Créer l'observer
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        // Si l'image entre dans le viewport
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          // Arrêter d'observer cette image
          observer.unobserve(img);
        }
      });
    },
    config);

    // Observer toutes les images lazy
    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });

    // Log pour debug
    console.log(`Lazy loading initialisé pour ${lazyImages.length} images`);
  }

  /**
   * Précharge les images critiques (hero, above the fold)
   */
  function preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('img[loading="eager"]');

    criticalImages.forEach(function (img) {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
    });
  }

  // Initialiser au chargement du DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      preloadCriticalImages();
      initLazyLoading();
    });
  } else {
    preloadCriticalImages();
    initLazyLoading();
  }

  // Style CSS pour l'animation de fade-in
  const style = document.createElement("style");
  style.textContent = `
    img[data-src], img[data-srcset] {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    
    img.loaded, img.fade-in {
      opacity: 1;
    }
    
    img.load-error {
      opacity: 0.5;
      background-color: #f0f0f0;
    }
  `;
  document.head.appendChild(style);
})();
