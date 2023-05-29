var somaIdadesFamiliares = 0;
var contadorCliques = 0;
var contadorIdadesDigitadas = 0;
var mediaCalculada = false;

function criaElementos() {
	var divisaoFamiliar = document.getElementById("familiar");
	divisaoFamiliar.style.display = "flex";
	divisaoFamiliar.style.flexDirection = "column";
	divisaoFamiliar.style.alignItems = "center";

	var campoQuantidade = document.getElementById("quantidade");
	var quantidade = campoQuantidade.value;

	if (quantidade.length == 0) {
		alert("Digite a quantidade de membros da família!!");
	} else if (isNaN(quantidade)) {
		alert("Digite número!!");
	} else if (quantidade < 0) {
		alert("Digite um valor válido!!");
	} else if (contadorCliques  == quantidade) {
		contadorCliques++;
		var botao = document.createElement("button");
		botao.style.width = "70%"

		var textoBotao = document.createTextNode("Calcular Média");
		var espaco = document.createElement("br");
			
		botao.appendChild(textoBotao);
		divisaoFamiliar.appendChild(espaco);	
		divisaoFamiliar.appendChild(botao);	

		botao.onclick = function calculaMedia() {

			if (contadorIdadesDigitadas != contadorCliques-1) {
				alert("Preencha todas as idades!!");
			} else if (mediaCalculada == false) {
				//console.log("Botão")
				var media = somaIdadesFamiliares / quantidade;

				var titulo = document.createElement("h3");
				var resposta = document.createTextNode("A média de idades da sua família é " + media);
				titulo.appendChild(resposta);

				divisaoFamiliar.insertBefore(titulo, botao);

				mediaCalculada = true;
			} else {
				alert("Média já calculada!!");
			}
		}
	} else if (contadorCliques  < quantidade) {
		//console.log(contadorCliques);
		contadorCliques++;
		var paragrafo = document.createElement("p");
		var texto = document.createTextNode("Digite a idade do " + contadorCliques + "° familiar: ");
		paragrafo.appendChild(texto);

		var campoIdadeFamiliar = document.createElement("input");

		campoIdadeFamiliar.onblur = function armazenaIdade() {
			var idadeFamiliar = campoIdadeFamiliar.value;

			if (idadeFamiliar.length == 0) {
				alert("Digite uma idade!!");
			} else if (isNaN(idadeFamiliar)) {
				alert("Digite somente números!!");
			} else if (idadeFamiliar < 0) {
				alert("Digite uma idade válida!!")
			} else {
				idadeFamiliar = parseInt(idadeFamiliar);
				somaIdadesFamiliares += idadeFamiliar;
				contadorIdadesDigitadas++;
				//console.log(contadorIdadesDigitadas);				
			}
		}
		
		divisaoFamiliar.insertBefore(paragrafo, botao);
		divisaoFamiliar.insertBefore(campoIdadeFamiliar, botao);
	} else {
		alert("Não pode mais!!");
		//console.log(contadorCliques);
	}
}