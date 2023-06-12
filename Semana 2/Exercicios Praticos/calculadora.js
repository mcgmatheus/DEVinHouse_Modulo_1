var n1 = Number(prompt("digite o primeiro numero: "));
var n2 = Number(prompt("digite o segundo numero: "));
var resultado = 0;
var opcao = prompt(`
Selecione uma operação:
1 - Adição
2 - Subtração
3 - Divisão
4 - Multiplicação
5 - Exponenciação
6 - Raiz`);

switch (opcao) {
  case "1": {
    console.log("Voce escolheu a operação adição");
    resultado = n1 + n2;
    console.log(`O resultado de ${n1} + ${n2} é: ${resultado}`);
    break;
  }
  case "2": {
    console.log("Voce escolheu a operação subtração");
    resultado = n1 - n2;
    console.log(`O resultado de ${n1} - ${n2} é: ${resultado}`);
    break;
  }
  case "3": {
    console.log("Voce escolheu a operação divisão");
    resultado = n1 / n2;
    console.log(`O resultado de ${n1} / ${n2} é: ${resultado}`);
    break;
  }
  case "4": {
    console.log("Voce escolheu a operação multiplicação!");
    resultado = n1 * n2;
    console.log(`O resultado de ${n1} x ${n2} é: ${resultado}`);
    break;
  }
  case "5": {
    console.log("Voce escolheu a operação exponenciação!");
    resultado = n1 ** n2;
    console.log(`O resultado de ${n1} elevado à ${n2} é: ${resultado}`);
    break;
  }
  case "6": {
    console.log("Voce escolheu a operação de raiz quadrada!");
    resultado = Math.sqrt(n1);
    console.log(`O resultado da raiz de ${n1} é: ${resultado}`);
    resultado = Math.sqrt(n2);
    console.log(`O resultado da raiz de ${n2} é: ${resultado}`);
    break;
  }
}
