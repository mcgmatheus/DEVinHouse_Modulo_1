var perfil = prompt(` 
Digite o numero correspondente ao perfil do trabalhador:
1 - Jovem Aprendiz
2 - Registro Comum`);
var salario = 0;
var resultado = 0;

if (perfil == 1) {
  //Percentual descontado de 2% para aprendizes
  salario = Number(prompt("Informe o salário bruto: "));
  console.log("Categoria Apendriz. O valor do FGTS é: " + salario * 0.02);
  resultado = salario - salario * 0.02;
  console.log("Salário apos desconto é de: " + resultado);
} else if (perfil == 2) {
  //Percentual descontado de 8% registro comum
  salario = Number(prompt("Informe o salário bruto: "));
  console.log("Categoria registro comum. O valor do FGTS é: " + salario * 0.08);
  resultado = salario - salario * 0.08;
  console.log("Salário apos desconto é de: " + resultado);
} else {
  console.log("Perfil inválido");
}
