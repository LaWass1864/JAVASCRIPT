const nav = document.querySelector("nav");
// on stock la valeur du précedent niveau de scroll pour savoir si on est monté ou descendu
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
//   Niveau de scroll
  lastScroll = window.scrollY;
});
