let toggleBtn = document.querySelector(".toggle-btn");
const content = document.querySelector(".content");

let sideBar = document.getElementById("side-bar");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("is-closed");
});

// Priorité en css ! !important > id > class > baliseHtml

content.addEventListener("click", () => {
  sideBar.classList.remove("is-closed");
});

