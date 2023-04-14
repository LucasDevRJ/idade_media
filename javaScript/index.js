var somaIdadesFamiliares = 0;
var contadorCliques = 0;

function criaElementos() {
	var divisaoFamiliar = document.getElementById("familiar");
	var quantidade = document.getElementById("quantidade").value;

	if (contadorCliques  == quantidade) {
		console.log(contadorCliques);
		var botao = document.createElement("button");
		var textoBotao = document.createTextNode("Calcular Média");
		botao.appendChild(textoBotao);
		divisaoFamiliar.appendChild(botao);	

		botao.onclick = function calculaMedia() {
			console.log("Botão")
			var media = somaIdadesFamiliares / contadorCliques;

			var titulo = document.createElement("h3");
			var resposta = document.createTextNode("A média de idades da sua família é " + media);
			titulo.appendChild(resposta);

			divisaoFamiliar.insertBefore(titulo, botao);
		}
	} else if (contadorCliques  < quantidade) {
		console.log(contadorCliques);
		var paragrafo = document.createElement("p");
		var texto = document.createTextNode("Digite a idade do familiar: ");
		paragrafo.appendChild(texto);

		var campoIdadeFamiliar = document.createElement("input");

		campoIdadeFamiliar.onblur = function armazenaIdade() {
			var idadeFamiliar = campoIdadeFamiliar.value;
			idadeFamiliar = parseInt(idadeFamiliar);
			somaIdadesFamiliares += idadeFamiliar;
		}
		
		divisaoFamiliar.insertBefore(paragrafo, botao);
		divisaoFamiliar.insertBefore(campoIdadeFamiliar, botao);
	} else {
		alert("Não pode mais!!");
		console.log(contadorCliques);
	}

	contadorCliques++;
}