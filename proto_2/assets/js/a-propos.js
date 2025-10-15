/* ====================================
   À Propos Page JavaScript
   ==================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ====================================
  // Intersection Observer for Fade-in Animations
  // ====================================

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe value cards
  const valueCards = document.querySelectorAll(".value-card");
  valueCards.forEach((card) => {
    observer.observe(card);
  });

  // Observe stat cards
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card) => {
    observer.observe(card);
  });

  // ====================================
  // Animated Number Counter for Stats
  // ====================================

  function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        // Round numbers, handle special cases like "30+"
        if (element.dataset.suffix) {
          element.textContent = Math.floor(current) + element.dataset.suffix;
        } else {
          element.textContent = Math.floor(current);
        }
      }
    }, 16);
  }

  // Trigger counter animation when stats become visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numberElement =
            entry.target.querySelector(".stat-card__number");
          const targetText = numberElement.textContent;

          // Extract number and suffix (like "30+")
          const match = targetText.match(/(\d+)(\+?)/);
          if (match) {
            const targetNumber = parseInt(match[1], 10);
            const suffix = match[2];

            if (suffix) {
              numberElement.dataset.suffix = suffix;
            }

            numberElement.textContent = "0" + suffix;
            animateCounter(numberElement, targetNumber, 1500);
          }

          statsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    }
  );

  statCards.forEach((card) => {
    statsObserver.observe(card);
  });

  // ====================================
  // Smooth Scroll for Anchor Links
  // ====================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore empty anchors
      if (href === "#" || !href) {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ====================================
  // Parallax Effect on Story Image - DÉSACTIVÉ
  // ====================================

  // L'effet parallax a été remplacé par un positionnement CSS statique

  // ====================================
  // Partner Cards Hover Effect Enhancement
  // ====================================

  const partnerCards = document.querySelectorAll(".partner-card");

  partnerCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });

  // ====================================
  // Value Cards Tilt Effect (Optional)
  // ====================================

  valueCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  // ====================================
  // Accessibility: Reduce Motion for Users
  // ====================================

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (prefersReducedMotion.matches) {
    // Disable complex animations for users who prefer reduced motion
    document.querySelectorAll(".value-card, .stat-card").forEach((element) => {
      element.style.animation = "none";
      element.style.opacity = "1";
      element.style.transform = "none";
    });

    // Disable parallax
    if (storyImage) {
      storyImage.style.transform = "none";
    }

    // Disable tilt effect
    valueCards.forEach((card) => {
      card.removeEventListener("mousemove", () => {});
      card.removeEventListener("mouseleave", () => {});
    });
  }
});
