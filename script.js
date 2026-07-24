// Intersection Observer for section animations
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of element is visible
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // If it's a section, also animate child cards
        if (entry.target.classList.contains("section-animate")) {
          const cards = entry.target.querySelectorAll(".card-animate");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, 100 + index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all section-animate elements
  const sections = document.querySelectorAll(".section-animate");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Also observe card-animate elements directly (for cards outside sections)
  const cards = document.querySelectorAll(".card-animate");
  cards.forEach((card) => {
    observer.observe(card);
  });
});
