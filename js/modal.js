// Navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Reference to the HTML element
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const numberParticipations = document.querySelector("#number_participations");
const BtnRadio = document.querySelectorAll("input[name='location']");
const choiceCheckbox = document.querySelector("#checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Message error
const message = {
  name: "Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés",
  email: "Veuillez renseigner une adresse mail valide.",
  birthdate: "Vous devez avoir plus de 12 ans pour participer",
  numberParticipations: "Veuillez renseigner un nombre entre 0 et 99",
  city: "Merci de sélectionner une ville",
  conditions: `Vous devez accepter les conditions d'utilisation`,
};

// Regex
const regexName = /^([A-Za-z|\s]{2,20})?([-]{0,1})?([A-Za-z|\s]{2,20})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]{1,2})$/;

//Validate input using an event listener
firstname.addEventListener("input", () =>
  checkInputValue(regexName, firstname, message.name)
);
lastname.addEventListener("input", () =>
  checkInputValue(regexName, lastname, message.name)
);
email.addEventListener("input", () =>
  checkInputValue(regexEmail, email, message, email)
);
