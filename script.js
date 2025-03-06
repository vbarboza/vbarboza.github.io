document.addEventListener('DOMContentLoaded', function() {
    const taglines = [
      "Cat person.",
      "Software gardener.",
      "My wife's favorite barista.",
      "35mm street photographer.",
      "Analog synthesizer enthusiast.",
      "Sometimes I code.",
      "Documentation writer.",
    ];
    
    const taglineElement = document.getElementById('tagline');
    
    if (taglineElement) {
      const randomIndex = Math.floor(Math.random() * taglines.length);
      taglineElement.textContent = taglines[randomIndex];

      taglineElement.addEventListener('click', function() {
        const newRandomIndex = Math.floor(Math.random() * taglines.length);
        taglineElement.textContent = taglines[newRandomIndex];
      });
    }
  });