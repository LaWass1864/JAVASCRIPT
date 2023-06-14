const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.top = "-50px";
  } else {
    nav.style.top = "0";
  }
});

console.log(window.scrollY);
