function Mostrar() {
	var cont = 0, suma = 0;
	while(cont < 5){
		var numero = parseFloat(prompt("Ingrese un número:"));
		while(isNaN(numero)){
			numero = parseFloat(prompt("Número inválido. Ingrese un número:"));
		}
		cont++;
		suma += numero;
	}
	promedio = suma / 5;
	document.getElementById("suma").value = suma.toFixed(2);
	document.getElementById("promedio").value = promedio.toFixed(2);
}