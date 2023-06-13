// Déclaration de variable

const countDisplay = document.querySelector("h3");
let counter = 0;

const bubblemaker = () => {
  const bubble = document.createElement("span");
  // On lui ajoute la classe bubble en ajouter un span au body
  document.body.appendChild(bubble);
  // Ajout de la classe bubble au span
  bubble.classList.add("bubble");

  // randomiser les bulles
  // Math.random : production d'un chiffre aleatoire,
  const size = Math.random() * 200 + 100 + "px";

  //Injection d'un style pour que la hauteur et la largeur soit = a size
  bubble.style.height = size;
  bubble.style.width = size;

  // Positionnement aleatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Fonction ternaire c'est un if else. On test la condition on test la condition valeur si vrai ensuite valeur si faux
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // Injecter un mouvement sur la gauche et toucher la variable CSS --left
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener('click', () => {
    counter++;
    // La valeur des bulles eclatée s'appelle
    countDisplay.textContent = counter;
    bubble.remove();
  })
  // Dans 8 secondes, la bulle va se detruire
  setTimeout(() => {
    bubble.remove;
  }, 8000);
 
};

setInterval(bubblemaker, 900);

// Suppression des bulles
