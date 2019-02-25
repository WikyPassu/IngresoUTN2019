function Mostrar() {
	var numero,respuesta,sumPos = 0,sumNeg = 0,cantPos = 0,cantNeg = 0,cantCeros = 0,cantPar = 0,promPos,promNeg,diferencia;
	do{
		numero = parseInt(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Número inválido. Ingrese un número:"));
		}
		if(numero > 0){
			cantPos++;
			sumPos += numero;
		}
		else if(numero < 0){
			cantNeg++;
			sumNeg += numero;
		}
		else{
			cantCeros++;
		}
		if(numero % 2 == 0){
			cantPar++;
		}
		respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	}while(respuesta == "s");
	promPos = sumPos / cantPos;
	promNeg = sumNeg / cantNeg;
	if(isNaN(promPos)){
		promPos = 0;
	}
	if(isNaN(promNeg)){
		promNeg = 0;
	}
	diferencia = cantPos - cantNeg;
	document.write("Suma de positivos: "+sumPos+"<br>Suma de negativos: "+sumNeg+"<br>Cantidad de positivos: "+cantPos+"<br>Cantidad de negativos: "+cantNeg+"<br>Cantidad de ceros: "+cantCeros+"<br>Cantidad de numeros pares: "+cantPar+"<br>Promedio de positivos: "+promPos+"<br>Promedio de negativos: "+promNeg+"<br>Diferencia entre positivos y negativos: "+diferencia);
}