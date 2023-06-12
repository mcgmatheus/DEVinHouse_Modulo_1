var dataHoje = new Date().toLocaleDateString();
var nome = prompt("Digite o nome do funcionario: ");
var dataInicio = prompt("Digite a data de inicio do periodo de férias: ");
var dataFim = prompt("Digite a data do final do periodo de férias: ");

// ${} é utilizado para concatenar strings com variaveis

var carta = `
Caro(a) responsável 
Gostaria de solicitar minhas férias conforme as informações abaixo: 

Nome do funcionário: ${nome} 
Data de inicio: ${dataInicio}
Data de fim: ${dataFim}

Agradeço antecipadamente pela atenção e aguardo a confirmação do meu pedido.

Atenciosamente, ${nome}

Gerado em ${dataHoje}
`;

console.log(carta);
