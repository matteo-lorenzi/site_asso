/* ====================================
   Programme Page JavaScript
   ==================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ====================================
  // Calendar Tabs Functionality
  // ====================================

  const calendarTabs = document.querySelectorAll(".calendar-tab");
  const timelines = document.querySelectorAll(".timeline");

  calendarTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active state from all tabs
      calendarTabs.forEach((t) => {
        t.classList.remove("calendar-tab--active");
        t.setAttribute("aria-selected", "false");
      });

      // Add active state to clicked tab
      tab.classList.add("calendar-tab--active");
      tab.setAttribute("aria-selected", "true");

      // Hide all timelines
      timelines.forEach((timeline) => {
        timeline.classList.remove("timeline--active");
      });

      // Show corresponding timeline
      const day = tab.getAttribute("data-day");
      const targetTimeline = document.getElementById(`timeline-${day}`);
      if (targetTimeline) {
        targetTimeline.classList.add("timeline--active");
      }
    });
  });

  // ====================================
  // Discipline Filters
  // ====================================

  const filterButtons = document.querySelectorAll(".filter-btn");
  const timelineEvents = document.querySelectorAll(".timeline-event");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active state from all filter buttons
      filterButtons.forEach((btn) =>
        btn.classList.remove("filter-btn--active")
      );

      // Add active state to clicked button
      button.classList.add("filter-btn--active");

      // Get selected filter
      const filter = button.getAttribute("data-filter");

      // Filter events
      timelineEvents.forEach((event) => {
        const discipline = event.getAttribute("data-discipline");

        if (filter === "tous" || discipline === filter) {
          event.classList.remove("timeline-event--hidden");
          // Fade in animation
          event.style.opacity = "0";
          event.style.transform = "translateX(-20px)";

          setTimeout(() => {
            event.style.transition = "all 0.3s ease-in-out";
            event.style.opacity = "1";
            event.style.transform = "translateX(0)";
          }, 50);
        } else {
          event.classList.add("timeline-event--hidden");
        }
      });
    });
  });

  // ====================================
  // Age Filters for Workshops
  // ====================================

  const ageFilters = document.querySelectorAll(".age-filter");
  const workshopCards = document.querySelectorAll(".workshop-card");

  ageFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove active state from all age filters
      ageFilters.forEach((f) => f.classList.remove("age-filter--active"));

      // Add active state to clicked filter
      filter.classList.add("age-filter--active");

      // Get selected age group
      const ageGroup = filter.getAttribute("data-age");

      // Filter workshop cards
      workshopCards.forEach((card) => {
        const cardAge = card.getAttribute("data-age");

        if (ageGroup === "tous" || cardAge === ageGroup) {
          card.classList.remove("workshop-card--hidden");
          // Fade in animation
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";

          setTimeout(() => {
            card.style.transition = "all 0.4s ease-in-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.classList.add("workshop-card--hidden");
        }
      });
    });
  });

  // ====================================
  // Intersection Observer for Animations
  // ====================================

  const observerOptions = {
    threshold: 0.1,
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

  // Observe timeline events
  timelineEvents.forEach((event) => {
    observer.observe(event);
  });

  // Observe workshop cards
  workshopCards.forEach((card) => {
    observer.observe(card);
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
  // Combined Discipline + Age Filtering
  // (Optional: Filter workshops by both discipline and age)
  // ====================================

  let currentDisciplineFilter = "tous";
  let currentAgeFilter = "tous";

  // Update discipline filter tracking
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentDisciplineFilter = button.getAttribute("data-filter");
      applyWorkshopFilters();
    });
  });

  // Update age filter tracking
  ageFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentAgeFilter = filter.getAttribute("data-age");
      applyWorkshopFilters();
    });
  });

  function applyWorkshopFilters() {
    workshopCards.forEach((card) => {
      const cardAge = card.getAttribute("data-age");
      const cardDiscipline = card.getAttribute("data-discipline");

      const ageMatch =
        currentAgeFilter === "tous" || cardAge === currentAgeFilter;
      const disciplineMatch =
        currentDisciplineFilter === "tous" ||
        cardDiscipline === currentDisciplineFilter;

      if (ageMatch && disciplineMatch) {
        card.classList.remove("workshop-card--hidden");
        // Fade in animation
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.transition = "all 0.4s ease-in-out";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.classList.add("workshop-card--hidden");
      }
    });
  }

  // ====================================
  // Event Count Display
  // ====================================

  function updateEventCount() {
    const activeTimeline = document.querySelector(".timeline--active");
    if (!activeTimeline) return;

    const visibleEvents = activeTimeline.querySelectorAll(
      ".timeline-event:not(.timeline-event--hidden)"
    );
    const totalEvents = activeTimeline.querySelectorAll(".timeline-event");

    // You can display this count if needed
    console.log(
      `Showing ${visibleEvents.length} of ${totalEvents.length} events`
    );
  }

  // Update count when filters change
  filterButtons.forEach((button) => {
    button.addEventListener("click", updateEventCount);
  });

  calendarTabs.forEach((tab) => {
    tab.addEventListener("click", updateEventCount);
  });

  // Initial count
  updateEventCount();

  // ====================================
  // Keyboard Navigation for Tabs
  // ====================================

  calendarTabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (e) => {
      let newIndex;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        newIndex = (index + 1) % calendarTabs.length;
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        newIndex = (index - 1 + calendarTabs.length) % calendarTabs.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        newIndex = calendarTabs.length - 1;
      }

      if (newIndex !== undefined) {
        calendarTabs[newIndex].click();
        calendarTabs[newIndex].focus();
      }
    });
  });
});
