var peso = Number(prompt("Digite seu peso em kg: "));
var altura = Number(prompt("Digite sua altura em cm: "));
altura = altura / 100; //altura em metros
var imc = peso / Math.pow(altura, 2);

console.log("IMC: " + imc);
console.log("IMC: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Classificação: Abaixo do peso");
} else if (imc < 24.9) {
  console.log("Classificação: Peso Ideal");
} else if (imc < 29.9) {
  console.log("Classificação: Levemente acima do peso");
} else if (imc < 34.9) {
  console.log("Classificação: Obesidade grau 1");
} else if (imc < 39.9) {
  console.log("Classificação: Obesidade grau 2 (severa)");
} else if (imc > 40) {
  console.log("Classificação: Obesidade grau 3 (mórbida)");
} else {
  console.log("Erro");
}
