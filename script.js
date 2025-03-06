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
    }

    const footerTexts = [
      "En barrio de ricachones, sin armas ni rencores, es sólo plata y no amores.",
      "All your base are belong to us.",
      "The cake is a lie.",
      "Foo was here.",
      "I'm a teapot.",
      "No cookie for you.",
      "(fnord)",
    ]

    const footerTextElement = document.getElementById('footer');

    if (footerTextElement) {
      const randomIndex = Math.floor(Math.random() * footerTexts.length);
      footerTextElement.textContent = footerTexts[randomIndex];
    }
  });