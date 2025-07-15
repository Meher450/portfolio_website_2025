document.addEventListener("scroll", () => {
  const label = document.querySelector('.about-label.scroll-line');
  if (!label) return;

  const section = label.closest('.about-section');
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how much of the section is visible
  const visibleTop = Math.max(0, windowHeight - sectionRect.top);
  const sectionHeight = sectionRect.height + windowHeight;
  let scrollPercent = visibleTop / sectionHeight;

  // Clamp between 0 and 1
  scrollPercent = Math.max(0, Math.min(1, scrollPercent));

  // Apply scale to line
  const line = getComputedStyle(label, '::after');
  label.style.setProperty('--line-scale', scrollPercent);
});

  const contactLabel = document.querySelector(".contact-heading-label");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        contactLabel.classList.add("show-line");
      } else {
        contactLabel.classList.remove("show-line");
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(contactLabel);

 const projectCards = document.querySelectorAll('.project-card');

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.4
  });

  projectCards.forEach(card => observer1.observe(card));


document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const status = document.getElementById('form-status');
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent!";
      status.style.color = "#3ef3c6";
      form.reset();
    } else {
      status.textContent = "❌ Something went wrong. Please try again.";
      status.style.color = "#ff5f56";
    }
  } catch (error) {
    status.textContent = "❌ Network error. Try again later.";
    status.style.color = "#ff5f56";
  }
});
const fadeElements = document.querySelectorAll('.fade-scroll');

const handleFadeOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if element is inside the viewport
    if (rect.top < windowHeight - 50 && rect.bottom > 50) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', handleFadeOnScroll);
window.addEventListener('load', handleFadeOnScroll); // initial check

// Scroll to top on button click
const scrollBtn = document.getElementById('scrollToTopBtn');

if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

