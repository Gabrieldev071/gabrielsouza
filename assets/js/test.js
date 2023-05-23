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

// console.log(campos);

function customValidation(event) {
  const campo = event.target

  //logica para verificar se existem erros

  function verifyErrors() {
    let foundError = false;

    for (error in campo.validity) {
      console.log(error)
    }
    
    return foundError
  }

  verifyErrors()

  //troca mensagem de required
  campo.setCustomValidity("Esse campo é obrigatório");
  
}

/* para cada campo que estiver em "campos" */
for (let campo of campos) {

  /* para cada campo, o evento invalid está ouvindo e vai executar a função */
  campo.addEventListener("invalid", event => {
    
  })
}