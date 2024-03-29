import { regexEmail, regexTelefone } from "../utils/regexs.js";

const campoNomeCompleto = document.getElementById("campo-nome-completo");
const campoSenha = document.getElementById("campo-senha");
const campoTelefone = document.getElementById("campo-telefone");
const campoEmail = document.getElementById("campo-email");

document
  .getElementById("form-cadastro")
  .addEventListener("submit", fazerCadastro);

function fazerCadastro(event) {
  event.preventDefault();

  const nome = campoNomeCompleto.value;
  const senha = campoSenha.value;
  const telefone = campoTelefone.value;
  const email = campoEmail.value;

  campoNomeCompleto.classList.remove("input-error");
  document.getElementById("error-nome").hidden = true;

  campoSenha.classList.remove("input-error");
  document.getElementById("error-senha").hidden = true;

  campoTelefone.classList.remove("input-error");
  document.getElementById("error-telefone").hidden = true;

  campoEmail.classList.remove("input-error");
  document.getElementById("error-email").hidden = true;

  if (nome === "") {
    campoNomeCompleto.classList.add("input-error");
    campoNomeCompleto.focus();
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O nome é obrigatório";
  } else if (senha.length < 9) {
    campoSenha.classList.add("input-error");
    campoSenha.hidden = false;
    document.getElementById("error-senha").innerText =
      "A senha deve no minimo 8 caracteres";
  } else if (regexTelefone.test(telefone) === false) {
    campoTelefone.classList.add("input-error");
    document.getElementById("error-telefone").hidden = false;
    document.getElementById("error-telefone").innerText =
      "Digite um telefone válido";
  } else if (regexEmail.test(email) === false) {
    campoEmail.classList.add("input-error");
    document.getElementById("error-email").hidden = false;
    document.getElementById("error-email").innerText = "Digite um email válido";
  } else {
    //cadastrar dados que foram digitados
    /*
    GET - lista varias informações
    POST- cadastra um novo recurso
    DELETE - deletar um recurso
    PUT - Atualiza todas as informações
    PATCH - Atualiza uma informação
    */
    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Cadastrando....";

    fetch("http://localhost:3333/usuarios", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        senha: senha,
        telefone: telefone,
        email: email,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Cadastrado com sucesso");
        window.location.href = "./index.html";
      })
      .catch(() => {
        alert("Houve um erro ao cadastrar, tente novamente");
      });
  }
}
