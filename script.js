document.addEventListener('DOMContentLoaded', function() {
    const taglines = [
      "Software gardener pruning branches since 2010.",
      "Best barista in town according to my wife.",
      "Analog synthesizer enthusiast playing bleeps and bloops.",
      "Shitty 35mm street photographer wannabe.",
      "Cat person.",
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