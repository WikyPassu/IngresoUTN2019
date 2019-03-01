function Mostrar() {
    var cont = 0;
    var numero = parseInt(prompt("Ingrese un numero natural:"));
    while(isNaN(numero) || numero < 0){
        numero = parseInt(prompt("Error. Ingrese un numero natural:"));
    }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            cont++;
        }
    }
    if (cont == 2){
        alert("El numero "+numero+" es primo.");
    }
    else{
        alert("El numero "+numero+" no es primo.");
    }
}