function Mostrar() {
	var numero, pos = 0, neg = 1, respuesta;
	do {
		numero = parseFloat(prompt("Ingrese un número:"));
		while (isNaN(numero)) {
			numero = parseFloat(prompt("Número inválido. Ingrese un número:"));
		}
		if(numero > 0){
			pos += numero;
		}
		else{
			neg *= numero;
		}
		respuesta = prompt("¿Desea seguir ingresando números?");
	} while (respuesta == "s");
	document.getElementById("suma").value = pos.toFixed(2);
	document.getElementById("producto").value = neg.toFixed(2);

}