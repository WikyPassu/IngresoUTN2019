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
/* La idea es ir iterando y dividiendo al numero por
la variable de control, luego compruebo si el resto
de esa operacion da 0 (es decir, es divisible por ese
numero) => cont++.
Yo busco que mi cont == 2 porque un numero primo es
aquel numero natural > 1 que solo es divisible por
1 y sí mismo. Si esta condicion no se cumple, mi cont
habra sido incrementado numerosas veces porque el
numero ingresado tiene mas de 2 divisores. 
*/