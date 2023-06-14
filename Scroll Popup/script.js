const nav = document.querySelector("nav");
// Creation d'evenement au scroll
let scrollNav = 0;
// Height de la navbar qui se réduit lorsqu'on scroll vers et revient a sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollNav) {
    nav.style.height = "40px";
  } else {
    nav.style.height = "90px";
  }
});

// Apparition de l'image de la partie

const imgImpro = document.getElementById("imgImprovise");

let imgScroll = 350;

window.addEventListener("scroll", () => {
  if ((window.scrollY = imgScroll)) {
    imgImpro.style.transform = "translate(10px)";
    imgImpro.style.opacity = "1";
  }
});

// Apparition de la pop-up en bas du site

const popUp = document.getElementById("popup");

let bottomScroll = 750;

window.addEventListener('scroll', () => {
    if (window.scrollY = bottomScroll) {
        popUp.style.opacity = "1";
        popUp.style.transform="translate(20px)";
    } 
});

window.addEventListener('click', () => {
    popUp.style.display = "none";
});