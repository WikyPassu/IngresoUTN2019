function Mostrar() {
	var numero,respuesta,sumPos = 0,sumNeg = 0,cantPos = 0,cantNeg = 0,cantCeros = 0,cantPar = 0,promPos,promNeg,diferencia;
	do{
		numero = parseFloat(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseFloat(prompt("Número inválido. Ingrese un número:"));
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
		respuesta = prompt("¿Desea seguir ingresando números?");
	}while(respuesta == "s");
	promPos = sumPos / cantPos;
	promNeg = sumNeg / cantNeg;
	diferencia = cantPos - cantNeg;
	document.write("Suma de positivos: "+sumPos+"<br>Suma de negativos: "+sumNeg+"<br>Cantidad de positivos: "+cantPos+"<br>Cantidad de negativos: "+cantNeg+"<br>Cantidad de ceros: "+cantCeros+"<br>Cantidad de numeros pares: "+cantPar+"<br>Promedio de positivos: "+promPos.toFixed(2)+"<br>Promedio de negativos: "+promNeg.toFixed(2)+"<br>Diferencia entre positivos y negativos: "+diferencia);
}