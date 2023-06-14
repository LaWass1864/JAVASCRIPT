const nav = document.querySelector("nav");
// on stock une variable avec le let
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
//   le lastscroll = la valeur du scroll
  lastScroll = window.scrollY;
});
