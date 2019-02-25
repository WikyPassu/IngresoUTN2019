function Mostrar() {
	var numero, cont = 0, suma = 0, respuesta;
	do{
		numero = parseFloat(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseFloat(prompt("Número inválido. Ingrese un número:"));
		}
		cont++;
		suma += numero;
		respuesta = prompt("¿Desea seguir ingresando números?");
	}while(respuesta == "s");
	promedio = suma / cont;
	document.getElementById("suma").value = suma.toFixed(2);
	document.getElementById("promedio").value = promedio.toFixed(2);
}