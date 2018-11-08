let navbarContent = document.querySelector('link[id="navbarImport"]').import;
let navbarHTML = navbarContent.getElementById("menuAndNavbar");
let footerContent = document.querySelector('link[id="footerImport"]').import;
let footerHTML = footerContent.getElementById("footer");
//Siden strukturen på forsiden og de andre sidene er litt annerledes, må navbaren og footeren legges inn på forskjellige steder. Hvis title == "forside" legges navbar øverst i dokumentet og footer nederst i dokumentet. Position på footer må også være relativ på forsiden og bredden må være inherit for at det skal funke korrekt. Navbaren skal også bare kunne endre størrelse på forsiden.
if (document.title == "Forside") {
  window.addEventListener('scroll', resizeNavbar);
  document.body.insertBefore(navbarHTML.cloneNode(true), document.body.firstChild);
  document.body.appendChild(footerHTML.cloneNode(true));
  document.getElementById("footer").style.position = "relative";
  document.getElementById("footer").style.width = "inherit";
}
else { //på de andre nettsidene bli navbar lagt til toppen av holder-diven og footer til bunnen. Navbaren skal også være den lille versjonen
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

function resizeNavbar() { //Kjører funksjonen hver gang brukeren scroller på forsiden. Hvis man har skrollet til toppen legger fjerner den "small"-klassen. For alle andre scrolleverdier skal navbaren ha classen small. CSS tar av seg resten av endringene.
  const scrollY = window.pageYOffset;
  if (scrollY > resizeOn) {
    navbarElement.classList.add("small");
  }
  else {
    navbarElement.classList.remove("small");
  }
}

function menuToggle() { //Kjører når menuButton blir trukket på og legger til/fjerner "toggled"-klassen til både navbarElement menuElement og menuButtonElement. CSS tar av seg resten av endringene.
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