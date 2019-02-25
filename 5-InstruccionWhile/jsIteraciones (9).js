function Mostrar() {
	var numero, max, min, flag = 0, respuesta;
	do {
		numero = parseInt(prompt("Ingrese un número:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Numero inválido. Ingrese un número:"));
		}
		if (numero > max || flag == 0) {
			max = numero;
		}
		if (numero < min || flag == 0) {
			min = numero;
			flag = 1;
		}
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	} while (respuesta == "s");
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}