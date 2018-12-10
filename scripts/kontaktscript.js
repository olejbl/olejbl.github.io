let submitElement = document.getElementById("submit");
let modal = document.getElementById("myModal");
let divModalElement = document.getElementById("divModal");
let closeElement = document.getElementById("close");
let navnElement = document.getElementById("navn");
let emailElement = document.getElementById("email");
let tekstElement = document.getElementById("tekst");
navnElement.onkeyup = erstattTegnNavn;
emailElement.onkeyup = erstattTegnEmail;
submitElement.addEventListener('click', displayModal);
//Funksjon som fjerner modalen ved klikk på X-knapp.
closeElement.onclick = function() {
  modal.style.display = "none";
}
//erstattTegnNavn erstatter tegn som blir skrevet inn i navnElement som ikke hører til det norske alfabetet
function erstattTegnNavn() {
  navnElement.value = navnElement.value.replace(/[^a-zA-ZæøåÆØÅ ]+/, '');
}
//erstattTegnNavn erstatter tegn som blir skrevet inn i navnElement som ikke hører til det norske alfabetet
function erstattTegnEmail() {
  emailElement.value = emailElement.value.replace(/[^a-zA-Z0-9@.]+/, '');
}
//Funksjon som fjerner modalen ved klikk utenfor modalen.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Funksjon som sjekker om alle feltene i formen er utfylt, deretter legger den til brukerens input i modalen og sletter det som ble skrevet inn i formen av brukeren.
function displayModal() {
  if (navnElement.value == "") {
    alert("Du må oppgi et gyldig navn.")
  }
  else if (validerEmail(emailElement.value)) {
    alert("Du må oppgi en gyldig email.")
  }
  else if (tekstElement.value == "") {
    alert("Du må skrive en melding for å kunne sende en melding.")
  }
  else {
    let melding = "Takk for din henvendelse, " + navnElement.value + ". Du vil få svar fortløpende på: " + document.forms["form"]["email"].value;
    divModalElement.innerHTML = melding;
    modal.style.display = "block";
    navnElement.value = "";
    emailElement.value = "";
    tekstElement.value = "";
  }
}
//Veldig primitiv email validator som sjekker om emailen er lang nok, har kun én alfakrøll og minst ett punktum.
function validerEmail(email) {
  if (email.length < 5) {
    return true
  }
  let alfaCounter = 0
  let punktumCounter = 0
  for (var i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      alfaCounter++;
    }
    if (email[i] == ".") {
      punktumCounter++;
    }
  }
  if (alfaCounter != 1 || punktumCounter == 0) {
    return true
  }
  return false
}