/* DOM element */

const form = document.getElementById("form");
const campos = document.querySelectorAll("[required]");
const small = document.querySelectorAll(".mensagem");
const campoArea = document.getElementById("mensagemArea");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const mensagemErro = [
  "O campo nome deve ter no mínimo 3 caracteres.",
  "O campo e-mail é inválido.",
  "O campo assunto é inválido.",
  "O campo mensagem deve ter no mínimo 5 caracteres"
];


/* Function to add error message to input */

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  small[index].style.display = "block";
  small[index].classList.add("input--erro");
  small[index].innerHTML = mensagemErro[index];

  campoArea[index].style.border = "2px solid #e63636";
}

/* Function to remove error message in input */

function removeError(index) {
  small[index].style.display = "none";
  campos[index].style.border = "";
  campoArea[index].style.border = "";
}

/* Function for name validation */

function nameValidate() {
  if (campos[0].value.length < 5) {
    setError(0);
  } else {
    removeError(0);
  }
}

/* Function for email validation */

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

/* Function for subject validation */

function assuntoValidate() {
  if (campos[2].value.length < 5) {
    setError(2);
  } else {
    removeError(2);
  }
}

/* Function for message validation */

function validaMensagem() {
  if (campos[3].value.length < 5) {
    setError(3);
  } else {
    removeError(3);
  }
}

/* Change validation messages */
form.addEventListener("submit", (event) => {
  console.log("Enviar o formulário");

  // Impede o envio do formulário
  event.preventDefault(); 
});

