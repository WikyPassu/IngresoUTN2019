function Mostrar() {
    var numero;
    for (i = 1; i >= 1; i++) {
        numero = parseInt(prompt("Ingrese un numero:"));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Error. Ingrese un numero:"));
        }
        if (numero == 9) {
            break;
        }
    }
}