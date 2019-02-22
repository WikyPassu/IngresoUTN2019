function Mostrar() {
	var numero = parseInt(prompt("Ingrese un número entre 0 y 9:"));
	while(numero < 0 || numero > 9 || isNaN(numero)){
		numero = parseInt(prompt("Numero inválido. Ingrese nuevamente un número entre 0 y 9:"));
	}
	document.getElementById("Numero").value = numero;
}