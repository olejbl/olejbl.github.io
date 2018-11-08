let modal = document.getElementById('myModal');
let submitElement = document.getElementById("submitButton");
let divModalElement = document.getElementById("divModal");
let closeElement = document.getElementById("close");
let side1Element = document.getElementById("side1");
let side2Element = document.getElementById("side2");
let pageButtonsList = document.getElementsByClassName("pageButtons");
let navnElement = document.getElementById("navn");
let tlfElement = document.getElementById("tlf");
//legger til lyttere på neste/tilbake knappene
for (var i = 0; i < pageButtonsList.length; i++) {
  pageButtonsList[i].addEventListener("click", changePage)
}
//skriver resultatet av funksjonen submitOrder() inn i modalen
submitElement.onclick = function() {
  divModalElement.innerHTML = submitOrder();
}
//Skjuler modalen ved klikk på closeElement
closeElement.onclick = function() {
  modal.style.display = "none";
}
//skjuler modalen ved klikk utenfor modalen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//submitOrder() alerter brukeren hvis tlf ikke er gyldig eller brukeren ikke oppgir navn
function submitOrder() {
  if (tlfElement.value.toString().length != 8 || navnElement.value == "") {
    alert("Du må fylle ut gyldig kontaktinformasjon")
  }
  else {
    let outputText = "";
    let checkedElements = [];
    //Henter inn alle checka inputs og legger inn i checkedElements lista
    inputElement = document.getElementsByClassName("input");
    for (let i = 0; i < inputElement.length; i++) {
      if (inputElement[i].checked == true) {
        checkedElements.push(inputElement[i]);
      }
    }
    //Hvis det ikke finnes noen checka elementer blir brukeren alerta
    if (checkedElements.length == 0) {
      alert("Du må i det minste bestille en ting.")
    }
    else {
      //genererer en output text som passer til brukerens bestilling
      outputText = "Takk for bestillingen, " + navnElement.value;
      if (checkedElements.length == 1) {
        outputText = outputText + ". Du har bestilt ";
      }
      else {
        outputText = outputText + ". Du har bestilt en hamburger med ";
      }
      for (let i = 0; i < checkedElements.length; i++) {
        if (i == 0) {
          outputText = outputText + checkedElements[i].value;
        }
        else if (i == checkedElements.length - 1) {
          outputText = outputText + " og " + checkedElements[i].value;
        }
        else {
          outputText = outputText + ", " + checkedElements[i].value;
        }
      }
      //legger til navn og nummer til outputText og gjør modalen synelig. returnerer outputText
      outputText = outputText + ". Du vil få en sms på " + tlfElement.value + " når bestillingen din er klar."
      modal.style.display = "block";
      return outputText;
    }
  }
}
//hvis neste-knappen blir trykket på vises side2 og side1 skjules. motsatt med tilbake-knappen
function changePage() {
  if (this.value == "Neste") {
    side1Element.style.display = "none";
    side2Element.style.display = "block";
  }
  else if (this.value == "Tilbake") {
    side1Element.style.display = "block";
    side2Element.style.display = "none";
  }
}