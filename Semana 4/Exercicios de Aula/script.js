function clicaEntrar() {
  var email = document.getElementById("campoEmail").value;
  var senha = document.getElementById("campoSenha").value;
  console.log(email);
  console.log(senha);

  document.getElementById("campoEmail").classList.remove("input_error");
  document.getElementById("campoSenha").classList.remove("input_error");

  if (email === "") {
    // adiciona um estilo inline
    // document.getElementById("campoEmail").style="border-color: red";

    // document.getElementById("campoEmail").style.borderColor = "red";
    // adiciona um estilo direto no objeto

    document.getElementById("campoEmail").classList.add("input_error");
    document.getElementById("campoEmail").focus();
    // adiciona a classe input_error ao campoEmail - melhor maneira
  } else if (senha === "") {
    document.getElementById("campoSenha").classList.add("input_error");
  } else document.getElementById("login").disabled = true;
  document.getElementById("login").style.opacity = 0.5;
  document.getElementById("login").innerText = "Entrando...";

  // redireciona para outra página
  window.location.href = "./feed.html";
}
