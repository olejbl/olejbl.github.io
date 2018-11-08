let navbarContent = document.querySelector('link[id="navbarImport"]').import;
let navbarHTML = navbarContent.getElementById("menuAndNavbar");
let footerContent = document.querySelector('link[id="footerImport"]').import;
let footerHTML = footerContent.getElementById("footer");
if (document.title == "Forside") {
  window.addEventListener('scroll', resizeNavbar);
  document.body.insertBefore(navbarHTML.cloneNode(true), document.body.firstChild);
  document.body.appendChild(footerHTML.cloneNode(true));
  document.getElementById("footer").style.position = "relative";
  document.getElementById("footer").style.width = "inherit";
}
else {
  document.getElementById("holder").appendChild(footerHTML.cloneNode(true));
  document.getElementById("holder").insertBefore(navbarHTML.cloneNode(true), document.getElementById("holder").firstChild);
  document.getElementById("navbar").classList.add("small");
}
const navbarElement = document.getElementById("navbar")
const menuElement = document.getElementById("menu")
const menuButtonElement = document.getElementById("menuButton")
let show = false;
menuButtonElement.onclick = menuToggle;
const resizeOn = 1;

function resizeNavbar() {
  const scrollY = window.pageYOffset;
  if (scrollY > resizeOn) {
    navbarElement.classList.add("small");
  }
  else {
    navbarElement.classList.remove("small");
  }
}

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