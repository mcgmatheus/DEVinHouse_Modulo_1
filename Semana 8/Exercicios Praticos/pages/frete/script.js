document.getElementById("cepForm").addEventListener("submit", exibeDados);

function exibeDados(event) {
  event.preventDefault();

  const cep = document.getElementById("cep").value;
  console.log(cep);

  //URL -> viacep.com.br/ws/01001000/json/
  // quando passa a url de uma api da internet, o fetch cria a requisição para esse serviço

  if (cep.length === 8 || cep.length === 9) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML = `
      <p>CEP: ${data.cep}</p>
      <p>Endereço: ${data.logradouro}</p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade : ${data.localidade}</p>
      <p>Estado: ${data.uf}</p>
      <p>DDD: ${data.ddd}</p>
      `;
      })
      //catch executa sempre que o then retorna um erro
      .catch(() => {
        alert("Erro ao realizar a solicitação");
      });
  } else {
    alert("Digite um cep válido");
  }
}
