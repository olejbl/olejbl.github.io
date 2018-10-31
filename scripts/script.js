const navbarElement = document.getElementById("navbar")
const menuElement = document.getElementById("menu")
const menuButtonElement = document.getElementById("menuButton")
let show = false;
menuButtonElement.onclick = menuToggle;

function menuToggle() {
  const scrollY = window.pageYOffset;
  if (show === false) {
    show = true
    navbarElement.classList.add("toggled");
    menuElement.classList.add("toggled");
    menuButtonElement.classList.add("toggled");
  }
  else {
    show = false
    navbarElement.classList.remove("toggled");
    menuElement.classList.remove("toggled");
    menuButtonElement.classList.remove("toggled");
  }
}