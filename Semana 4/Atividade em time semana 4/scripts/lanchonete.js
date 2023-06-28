function clicaNovoPedido() {
  containerNovoPedido.hidden = true;
  document.getElementById("codProduto").value = "";
  document.getElementById("produtoQtd").value = "";
}

function clicaPedido() {
  containerNovoPedido.hidden = false;
  var cod = document.getElementById("codProduto").value;
  var qtd = document.getElementById("produtoQtd").value;
  var resultado;
  var produto;

  if (qtd < 0) {
    document.getElementById("resultado").innerText = "Quantidade Inválida";
    agradece.hidden = true;
  } else {
    switch (cod) {
      case "1123": {
        produto = "Hamburguer";
        resultado = qtd * 12;
        agradece.hidden = false;
        break;
      }
      case "1134": {
        produto = "Sanduíche de Pernil";
        resultado = qtd * 9;
        agradece.hidden = false;
        break;
      }
      case "4521": {
        produto = "Bauru";
        resultado = qtd * 15;
        agradece.hidden = false;
        break;
      }
      case "5322": {
        produto = "Lanche de mortadela";
        resultado = qtd * 34.99;
        agradece.hidden = false;
        break;
      }
      default:
        agradece.hidden = true;
        document.getElementById("resultado").innerText = "Código Inválido";
    }
  }

  document.getElementById("resultado").innerText = `${qtd} ${produto}
   Total do pedido: R$${resultado.toFixed(2)}`;

  //  footer
  if (document.querySelector("body").offsetHeight > window.innerHeight)
    document.querySelector("footer").classList.add("footer-relative");
}
