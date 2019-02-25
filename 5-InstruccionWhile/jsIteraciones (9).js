function Mostrar() {
	var numero, max = 0, min = 0, respuesta;
	do{
		numero = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Numero inválido. Ingrese un número:"));
		}
		if(numero > max){
			max = numero;
		}
		else if(numero < min){
			min = numero;
		}
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	}while(respuesta == "s");
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}