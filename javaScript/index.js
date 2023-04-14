function criaElemento() {
	var campoQuantidadeMembrosFamilia = document.getElementById("entrada");

	var quantidadeMembrosFamilia = campoQuantidadeMembrosFamilia.value;

	for (var contador = 0; contador < quantidadeMembrosFamilia; contador++) {
		var familiar = document.getElementById("familiar");
		var paragrafo = document.createElement("p");
		var entrada = document.createElement("input");

		var texto  = document.createTextNode("Digite a idade do famíliar: ");

		paragrafo.appendChild(texto);

		familiar.appendChild(texto);
		familiar.appendChild(entrada);
	} 
}