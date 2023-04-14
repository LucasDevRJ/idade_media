function criaElemento() {
	var divisaoFamiliar = document.getElementById("familiar");
	var paragrafo = document.createElement("p");
	var texto = document.createTextNode("Digite a idade do familiar: ");
	paragrafo.appendChild(texto);

	divisaoFamiliar.appendChild(paragrafo);
}