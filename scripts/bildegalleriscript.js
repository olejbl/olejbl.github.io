const img_f = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
let slideshowElement = document.getElementById("slideshow");
var modalElement = document.getElementById("myModal");
var divModalElement = document.getElementById("divModal");
var closeElement = document.getElementById("close");
//Lukker modalen ved klikk på closeElement
closeElement.onclick = function() {
  modalElement.style.display = "none";
}
//Lukker modalen ved klikk utenfor modalen
window.onclick = function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = "none";
  }
}
//Funksjon som lager html kode for bildene fra arrayen img_f og tilsvarende dotter. Første bildet skal vises, de andre skal være skjult (foreløpig). Dottene har data som indikerer hvilket bilde de hører til. Funksjonen legger htmlen inn i document
function addImages() {
  let prevHTML = slideshowElement.innerHTML;
  let imgHTML = "";
  let dotHTML = "";
  let newHTML = "";
  for (var i = 0; i < img_f.length; i++) {
    if (i == 0) {
      imgHTML = imgHTML + "<div class='pic' style='display:block'><img src='img/bildegalleri/" + img_f[i] + "'></div>"
      dotHTML = dotHTML + "<div class='dots' data-alt='" + i + "' style='background-color:gray' id='dot" + (i + 1) + "'></div>"
    }
    else {
      imgHTML = imgHTML + "<div class='pic' style='display:none'><img src='img/bildegalleri/" + img_f[i] + "'></div>"
      dotHTML = dotHTML + "<div class='dots' data-alt='" + i + "' style='background-color:lightgray' id='dot" + (i + 1) + "'></div>"
    }
  }
  dotHTML = "<div class='dotDiv'>" + dotHTML + "</div>";
  newHTML = imgHTML + prevHTML + dotHTML;
  slideshowElement.innerHTML = newHTML;
}
addImages(); //Kjører Funksjonen addImages
//lager lister av bildene, pilene og dottene og legger til EventListeners
let pics = document.querySelectorAll(".pic");
let al = document.querySelectorAll("a");
let dots = document.querySelectorAll(".dots");
for (let i = 0; i < al.length; i++) {
  al[i].addEventListener("click", kjorPil);
}
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", kjorDot)
}
for (var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", zoomBilde)
}
let indexVisible = 0;
let indexNext = 0;
//Funksjonen kjører når en av pilene blir klikt. Hvis neste-pilen blir trukket vises neste bilde og korrosponderende dot endrer farge til gray. Motsatte skjer når man trykker på tilbake-knappen. indexVisible og indexNext korrosponderer til bildene i arrayen som vises og skal vises neste gang
function kjorPil() {
  if (this.className === "next") {
    if (indexVisible === pics.length - 1) {
      indexNext = 0;
    }
    else {
      indexNext = indexVisible + 1;
    }
    pics[indexNext].style.display = "block";
    pics[indexVisible].style.display = "none";
    dots[indexNext].style.backgroundColor = "gray";
    dots[indexVisible].style.backgroundColor = "lightgrey";
    indexVisible = indexNext;
  }
  if (this.className === "prev") {
    if (indexVisible === 0) {
      indexNext = pics.length - 1;
    }
    else {
      indexNext = indexVisible - 1;
    }
    pics[indexNext].style.display = "block";
    pics[indexVisible].style.display = "none";
    dots[indexNext].style.backgroundColor = "gray";
    dots[indexVisible].style.backgroundColor = "lightgrey";
    indexVisible = indexNext;
  }
}
//Funksjonen kjører når en av dottene blir klikt på. Funksjonen henter ut dataset som korrosponderer med bildet sitt og bytter til det. Endrer fargen på dottene. Endrer verdiene til indexNext og indexVisible til riktig verdi.
function kjorDot() {
  for (var i = 0; i < pics.length; i++) {
    if (i == this.dataset.alt) {
      pics[i].style.display = "block";
      dots[i].style.backgroundColor = "gray";
    }
    else {
      pics[i].style.display = "none";
      dots[i].style.backgroundColor = "lightgray";
    }
  }
  indexNext = Number(this.dataset.alt);
  indexVisible = Number(this.dataset.alt);
}
//Funksjonen legger til bildet som blir klikt på inn i modalen kun hvis siden er større enn 1024px. Dette er fordi at modalen ikke vil være særlig større enn bildet når vinduet er mindre enn 1024px. 
function zoomBilde() {
  if (window.innerWidth > 1024) {
    let temp = this.firstChild.cloneNode(false);
    divModalElement.replaceChild(temp, divModalElement.firstChild);
    modalElement.style.display = "block";
  }
}