function criaElemento() {
	var divisaoFamiliar = document.getElementById("familiar");
	var paragrafo = document.createElement("p");
	var texto = document.createTextNode("Digite a idade do familiar: ");
	paragrafo.appendChild(texto);

	var campoIdadeFamiliar = document.createElement("input");

	campoIdadeFamiliar.onblur = function armazenaIdade() {
		var idadeFamiliar = campoIdadeFamiliar.value;
	}

	divisaoFamiliar.appendChild(paragrafo);
	divisaoFamiliar.appendChild(campoIdadeFamiliar);
}