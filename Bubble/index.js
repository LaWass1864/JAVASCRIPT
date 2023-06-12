// Creation d'éléments
const bubble = document.createElement("span");
// On lui ajoute la classe bubble
bubble.classList.add('bubble');
document.body.appendChild(bubble);

// randomiser les bulles
const size = Math.random() * 200 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;

bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%";

bubble.style.setProperty('--left', Math.random() * 100 + "%")