/* ====================================
   Contact Page JavaScript
   ==================================== */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // ====================================
  // Form Validation
  // ====================================

  const validators = {
    prenom: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/,
      errorMessages: {
        required: "Le prénom est requis",
        minLength: "Le prénom doit contenir au moins 2 caractères",
        pattern: "Le prénom ne peut contenir que des lettres",
      },
    },
    nom: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/,
      errorMessages: {
        required: "Le nom est requis",
        minLength: "Le nom doit contenir au moins 2 caractères",
        pattern: "Le nom ne peut contenir que des lettres",
      },
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessages: {
        required: "L'email est requis",
        pattern: "Veuillez entrer une adresse email valide",
      },
    },
    telephone: {
      required: false,
      pattern: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      errorMessages: {
        pattern:
          "Veuillez entrer un numéro de téléphone valide (ex: 06 12 34 56 78)",
      },
    },
    sujet: {
      required: true,
      errorMessages: {
        required: "Veuillez sélectionner un sujet",
      },
    },
    message: {
      required: true,
      minLength: 10,
      errorMessages: {
        required: "Le message est requis",
        minLength: "Le message doit contenir au moins 10 caractères",
      },
    },
    rgpd: {
      required: true,
      errorMessages: {
        required: "Vous devez accepter l'utilisation de vos données",
      },
    },
  };

  // Validate single field
  function validateField(fieldName, value, isCheckbox = false) {
    const validator = validators[fieldName];
    if (!validator) return { valid: true, error: "" };

    // Check required
    if (validator.required) {
      if (isCheckbox && !value) {
        return { valid: false, error: validator.errorMessages.required };
      }
      if (!isCheckbox && (!value || value.trim() === "")) {
        return { valid: false, error: validator.errorMessages.required };
      }
    }

    // Skip other validations if field is empty and not required
    if (!validator.required && (!value || value.trim() === "")) {
      return { valid: true, error: "" };
    }

    // Check min length
    if (validator.minLength && value.length < validator.minLength) {
      return { valid: false, error: validator.errorMessages.minLength };
    }

    // Check pattern
    if (validator.pattern && !validator.pattern.test(value)) {
      return { valid: false, error: validator.errorMessages.pattern };
    }

    return { valid: true, error: "" };
  }

  // Display error message
  function showError(fieldName, errorMessage) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    const inputElement = document.getElementById(fieldName);

    if (errorElement) {
      errorElement.textContent = errorMessage;
    }

    if (inputElement) {
      inputElement.setAttribute("aria-invalid", "true");
      inputElement.classList.add("is-invalid");
    }
  }

  // Clear error message
  function clearError(fieldName) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    const inputElement = document.getElementById(fieldName);

    if (errorElement) {
      errorElement.textContent = "";
    }

    if (inputElement) {
      inputElement.removeAttribute("aria-invalid");
      inputElement.classList.remove("is-invalid");
    }
  }

  // Real-time validation on blur
  Object.keys(validators).forEach((fieldName) => {
    const field = document.getElementById(fieldName);
    if (!field) return;

    const isCheckbox = field.type === "checkbox";

    field.addEventListener("blur", () => {
      const value = isCheckbox ? field.checked : field.value;
      const result = validateField(fieldName, value, isCheckbox);

      if (!result.valid) {
        showError(fieldName, result.error);
      } else {
        clearError(fieldName);
      }
    });

    // Clear error on input
    field.addEventListener("input", () => {
      clearError(fieldName);
    });
  });

  // ====================================
  // Form Submission
  // ====================================

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Hide previous messages
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      // Validate all fields
      let isValid = true;
      const formData = new FormData(contactForm);

      Object.keys(validators).forEach((fieldName) => {
        const field = document.getElementById(fieldName);
        if (!field) return;

        const isCheckbox = field.type === "checkbox";
        const value = isCheckbox ? field.checked : field.value;
        const result = validateField(fieldName, value, isCheckbox);

        if (!result.valid) {
          showError(fieldName, result.error);
          isValid = false;
        } else {
          clearError(fieldName);
        }
      });

      if (!isValid) {
        // Scroll to first error
        const firstError = contactForm.querySelector('[aria-invalid="true"]');
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          firstError.focus();
        }
        return;
      }

      // Simulate form submission
      contactForm.classList.add("is-loading");

      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In production, replace with actual API call:
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(Object.fromEntries(formData))
        // });
        // if (!response.ok) throw new Error('Submission failed');

        // Show success message
        successMessage.style.display = "flex";
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

        // Reset form
        contactForm.reset();

        // Clear all errors
        Object.keys(validators).forEach((fieldName) => {
          clearError(fieldName);
        });
      } catch (error) {
        console.error("Form submission error:", error);
        errorMessage.style.display = "flex";
        errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      } finally {
        contactForm.classList.remove("is-loading");
      }
    });
  }

  // ====================================
  // Auto-fill subject if volunteer checkbox is checked
  // ====================================

  const benevoleCheckbox = document.getElementById("benevole");
  const sujetSelect = document.getElementById("sujet");

  if (benevoleCheckbox && sujetSelect) {
    benevoleCheckbox.addEventListener("change", () => {
      if (benevoleCheckbox.checked) {
        sujetSelect.value = "benevole";
      }
    });
  }

  // ====================================
  // Phone Number Formatting
  // ====================================

  const phoneInput = document.getElementById("telephone");

  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      // Remove all non-numeric characters
      let value = e.target.value.replace(/\D/g, "");

      // Format as XX XX XX XX XX
      if (value.length > 0) {
        value = value.match(/.{1,2}/g).join(" ");
      }

      e.target.value = value;
    });
  }

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
  // Character Counter for Message (Optional)
  // ====================================

  const messageTextarea = document.getElementById("message");

  if (messageTextarea) {
    const minChars = 10;
    const maxChars = 1000;

    // Create counter element
    const counterElement = document.createElement("div");
    counterElement.className = "character-counter";
    counterElement.style.fontSize = "var(--font-size-sm)";
    counterElement.style.color = "var(--color-slate)";
    counterElement.style.marginTop = "var(--spacing-1)";
    messageTextarea.parentElement.appendChild(counterElement);

    function updateCounter() {
      const length = messageTextarea.value.length;
      counterElement.textContent = `${length} / ${maxChars} caractères (minimum ${minChars})`;

      if (length < minChars) {
        counterElement.style.color = "#e74c3c";
      } else if (length >= maxChars) {
        counterElement.style.color = "#f39c12";
      } else {
        counterElement.style.color = "#27ae60";
      }
    }

    messageTextarea.addEventListener("input", updateCounter);
    messageTextarea.setAttribute("maxlength", maxChars);
    updateCounter();
  }

  // ====================================
  // Accessibility: Focus Management
  // ====================================

  // When form is submitted successfully, move focus to success message
  if (successMessage) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.style.display === "flex") {
          successMessage.setAttribute("tabindex", "-1");
          successMessage.focus();
        }
      });
    });

    observer.observe(successMessage, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }
});
