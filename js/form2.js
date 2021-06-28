document.writeln("with JS: TP 02 Form JS with test");

document.formContact.addEventListener("submit", validForm);

function validForm(event) {
  var nom = document.getElementById("name"); //ou let ou const à la place de var
  var prenom = document.getElementById("firstname");
  var age = document.getElementById("age");
  var email = document.getElementById("email");
  let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  let phone = document.getElementById("phone");
  let regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](from 1 to 9)(?:[\s.-]*\d{2}){4}$/;

  let list = document.getElementById("listcanal");
  let msg = document.getElementById("message");
  let error = document.getElementById("errors"); //ou let ou const à la place de var
  let errors = [];

  //Check nom caractères mini 2
  if (nom.value.length < 2 || nom.value === " ") {
    errors.push("<li>Le nom doit être d'au moins 2 caractères</li>");
  }

  //Check prénom caractères mini 2
  if (prenom.value.length < 2) {
    errors.push("<li>Le prénom doit être d'au moins 2 caractères</li>");
  }

  //Check age
  if (age.value <= 18) {
    errors.push("<li>Vous devez être majeur (plus de 18 ans)</li>");
  }

  //Check mail
  if (!email.value.match(regexEmail)) {
    errors.push("<li>Email invalide</li>");
  }

  //Check phone
  if (!phone.value.match(regexPhone)) {
    errors.push("<li>Numéro de téléphone invalide</li>");
  }

  if (errors.length > 0) {
    event.preventDefault();
    error.innerHTML = "<ul>" + errors.join("<br>") + "</ul>";
  } else {
    error.innerHTML = "";
  }
}
