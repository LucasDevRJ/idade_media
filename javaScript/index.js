function criaElemento() {
	var familiar = document.getElementById("familiar");
	var texto = document.createElement("p");
	var entrada = document.createElement("input");
	familiar.appendChild(texto);
	familiar.appendChild(entrada);
}