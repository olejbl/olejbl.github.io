const img_f = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
let slideshowElement = document.getElementById("slideshow");
var modalElement = document.getElementById("myModal");
var divModalElement = document.getElementById("divModal");
var closeElement = document.getElementById("close");
closeElement.onclick = function() {
  modalElement.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = "none";
  }
}

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
addImages();
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

function zoomBilde() {
  if (window.innerWidth > 1024) {
    let temp = this.firstChild.cloneNode(false);
    divModalElement.replaceChild(temp, divModalElement.firstChild);
    modalElement.style.display = "block";
  }
}