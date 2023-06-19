const nav = document.querySelector("nav");
let lastScroll = 0;
let playOnce = true;
const popUp = document.getElementById("popup");

window.addEventListener("scroll", () => {
    // Navbar effect
    if (window.scrollY > 50) {
        nav.style.background = "red";
    } else {
        nav.style.backdropFilter = "invert(80%)";
    }
  
    let scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    
    // Popup
    if (scrollValue > 0.85 && playOnce) {
      popup.style.opacity = 1;
      popup.style.transform = "none";
      playOnce = false;
    }
  });
