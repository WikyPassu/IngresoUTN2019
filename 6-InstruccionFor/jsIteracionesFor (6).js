function Mostrar() {
    var cont = 0;
    var numero = parseInt(prompt("Ingrese un numero limite:"));
    while(isNaN(numero) || numero < 2){
        numero = parseInt(prompt("Error. Ingrese un numero limite:"));
    }
    for (i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            cont++;
        }
    }
    console.log("Cantidad de numeros pares encontrados: "+cont);
}