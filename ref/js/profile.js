// profile.js
document.addEventListener('DOMContentLoaded', function () {
    const profileNameElement = document.querySelector('.profile-name');
    const phrases = [
        "ihebsilence", // Votre pseudo
        "ecnelisbehi", // Autre texte
        "azé" // Autre texte
    ]; 
    let phraseIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Vitesse de frappe en millisecondes
    const pauseBetweenPhrases = 4000; // Temps de pause avant d'effacer
    const eraseSpeed = 70; // Vitesse d'effacement

    function typePhrase() {
        if (charIndex < phrases[phraseIndex].length) {
            profileNameElement.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            setTimeout(erasePhrase, pauseBetweenPhrases);
        }
    }

    function erasePhrase() {
        if (charIndex > 0) {
            profileNameElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erasePhrase, eraseSpeed);
        } else {
            phraseIndex = (phraseIndex + 1) % phrases.length; // Passe à la prochaine phrase
            setTimeout(typePhrase, typingSpeed); // Démarre la saisie de la prochaine phrase
        }
    }

    // Démarrer la saisie de la première phrase
    typePhrase();
});

document.addEventListener("DOMContentLoaded", function() {
    const texts = ["@ihebsilence", "🍵🍯", "Vinland"]; // Ajoute autant de textes que tu veux
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false; // Pour savoir si on efface ou on écrit
    const typingSpeed = 150; // Vitesse d'écriture
    const deletingSpeed = 100; // Vitesse de suppression
    const delayBetweenTexts = 1000; // Délai avant de changer de texte (en ms)

    function typeWriter() {
      const currentText = texts[textIndex]; // Texte actuel
      let displayedText;

      if (!isDeleting) {
        // On ajoute des lettres
        displayedText = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          // Quand on a fini d'écrire le texte, on attend avant de supprimer
          setTimeout(() => {
            isDeleting = true;
          }, delayBetweenTexts);
        }
      } else {
        // On efface des lettres
        displayedText = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          // Quand le texte est complètement effacé, on passe au texte suivant
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // Change de texte en boucle
        }
      }

      // Mise à jour du titre
      document.title = displayedText;

      // Ajuste la vitesse en fonction si on écrit ou on efface
      const timeout = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeWriter, timeout);
    }

    // Lance la fonction au chargement de la page
    typeWriter();
  });