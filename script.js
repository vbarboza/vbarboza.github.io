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

      "\"You will say that I am always conjuring up awful difficulties & consequences - my answer to this is it is an important part of the duty of an engineer.\" (Robert Stephenson)"
    ]

    const footerTextElement = document.getElementById('footer');

    if (footerTextElement) {
      const randomIndex = Math.floor(Math.random() * footerTexts.length);
      footerTextElement.textContent = footerTexts[randomIndex];
    }
  });