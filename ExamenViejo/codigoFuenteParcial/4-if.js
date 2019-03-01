//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var n1 = parseInt(prompt("Ingrese un numero:"));
    var n2 = parseInt(prompt("Ingrese otro numero:"));
    var resultado, mensaje;
    while (isNaN(n1) || isNaN(n2)) {
        alert("Los numeros ingresados son invalidos.");
    }
    if (n1 == n2) {
        resultado = n1 * n2;
        mensaje = n1 + " x " + n2 + " = " + resultado;
    }
    else if (n1 > n2) {
        resultado = n1 - n2;
        mensaje = n1 + " - " + n2 + " = " + resultado;
    }
    else {
        resultado = n1 + n2;
        mensaje = n1 + " + " + n2 + " = " + resultado;
    }
    document.write = mensaje;
}

