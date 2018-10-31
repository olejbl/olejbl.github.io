
//document.getElementById("submitButton").onclick = submitOrder;

function submitOrder() {
    console.log("hei");
    let outputText = "Du har bestilt en hamburger med: ";
    let checkedElements = [];
    inputElement = document.getElementsByClassName("input");
    console.log(inputElement);
    // Legger alle checkede elementene i én liste så det blir lettere å sortere når
    //      man skal lage setninger etterpå
    for (let i=0; i < inputElement.length; i++){
        if (inputElement[i].checked == true){
            checkedElements.push(inputElement[i]);
        }
    }

    console.log(checkedElements);
    for (let i=0; i < checkedElements.length; i++){
        // passer på at første element formateres riktig
        if (i == 0 )  {
            outputText =  outputText +  checkedElements[i].value;
        }
        else if (i == checkedElements.length - 1) {
            outputText =  outputText + " og " + checkedElements[i].value + ".";
        }
        else {
            outputText =  outputText + ", " + checkedElements[i].value;
        }
    }
    return outputText;

}
//console.log("test" + outputText);

// Henter modal
var modal = document.getElementById('myModal');
// Henter knappen som åpner modal
var mSubmit = document.getElementById("submitButton");
// Henter inn elementet vi skal putte info inn i 
var element = document.getElementById("pModal");
var fragment = document.createDocumentFragment();
// Henter span-elementet som lukker modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
mSubmit.onclick = function() {
    submitOrder();
    element.innerHTML = submitOrder();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
