function Mostrar() {
	var numero, pos = 0, neg = 1, flag = 0, respuesta;
	do{
		numero = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Número inválido. Ingrese un número:"));
		}
		if(numero >= 0){
			pos += numero;
		}
		else{
			neg *= numero;
			flag = 1;
		}
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	}while (respuesta == "s");
	document.getElementById("suma").value = pos;
	if(flag == 0){
		neg = 0;
	}
	document.getElementById("producto").value = neg;
}