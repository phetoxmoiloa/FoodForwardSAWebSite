/* ==========================================================================
   FoodForward SA — main.js
   Handles: scroll-reveal animation, and client-side validation for the
   enquiry form (enquiry.html) and contact form (contact.html).
   No external dependencies — vanilla JS only, per the brief's tech
   requirements (HTML5, CSS3, JavaScript).
   ========================================================================== */

// ---------------------------------------------------------------------------
// Scroll reveal: fades/slides elements with the .reveal class into view as
// the user scrolls. Uses IntersectionObserver instead of a scroll listener
// so it doesn't run a calculation on every scroll event.
// ---------------------------------------------------------------------------
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  // Respect users who've asked for reduced motion: just show everything.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ---------------------------------------------------------------------------
// Generic form validation. Walks each required field, checks HTML5 validity
// (required / minlength / type="email" etc.), and toggles an .invalid class
// plus the field's paired .field-error message.
// Returns true if the whole form is valid.
// ---------------------------------------------------------------------------
function validateForm(form) {
  let isValid = true;

  form.querySelectorAll('.field').forEach((fieldWrap) => {
    const input = fieldWrap.querySelector('input, select, textarea');
    if (!input) return;

    const fieldIsValid = input.checkValidity();
    fieldWrap.classList.toggle('invalid', !fieldIsValid);
    if (!fieldIsValid) isValid = false;
  });

  return isValid;
}

// ---------------------------------------------------------------------------
// Wires a form up so that:
//  - invalid fields get flagged on submit (not before, so it isn't annoying)
//  - a field clears its error state as soon as it becomes valid again
//  - on success, the form is hidden and a confirmation message is shown
//    (this is a static prototype: nothing is actually sent to a server)
// ---------------------------------------------------------------------------
function initForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm(form)) {
      form.reset();
      form.style.display = 'none';
      if (success) success.classList.add('visible');
    } else {
      // Move focus to the first invalid field so keyboard/screen-reader
      // users land on the problem immediately.
      const firstInvalid = form.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea');
      if (firstInvalid) firstInvalid.focus();
    }
  });

  // Live-clear an error once the visitor fixes that specific field.
  form.querySelectorAll('input, select, textarea').forEach((input) => {
    input.addEventListener('input', () => {
      const fieldWrap = input.closest('.field');
      if (fieldWrap && input.checkValidity()) {
        fieldWrap.classList.remove('invalid');
      }
    });
  });
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initForm('enquiryForm', 'formSuccess');
  initForm('contactForm', 'contactSuccess');
});
