function Mostrar() {
    var cont = 0;
    var numero = parseInt(prompt("Ingrese un numero:"));
    while(isNaN(numero) || numero < 0){
        numero = parseInt(prompt("Error. Ingrese un numero:"));
    }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            cont++;
        }
    }
    console.log("Cantidad de numeros divisores encontrados: "+cont);
}
/* La idea es ir iterando y dividiendo al numero por
la variable de control, luego compruebo si el resto
de esa operacion da 0 (es decir, es divisible por ese
numero) => cont++.
Si no quiero contar al numero ingresado como divisor,
debo comprobar los valores que hay desde el 1 hasta la
mitad del numero del que quiero sacar sus divisores, 
porque mas de la mitad, nunca voy a encontrar ninguno
que me de una division entera.
*/