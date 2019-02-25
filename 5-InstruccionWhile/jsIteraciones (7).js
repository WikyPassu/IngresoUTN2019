function Mostrar() {
	var numero, cont = 0, suma = 0, respuesta;
	do{
		numero = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Número inválido. Ingrese un número:"));
		}
		cont++;
		suma += numero;
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	}while(respuesta == "s");
	promedio = suma / cont;
	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = promedio;
}