const sideBar = document.getElementById("side-bar")

const toggleButton = document.querySelector(".toggle-btn")
console.log(toggleButton)

toggleButton.addEventListener('click', () => {
  sideBar.style.left = "0px";

})

