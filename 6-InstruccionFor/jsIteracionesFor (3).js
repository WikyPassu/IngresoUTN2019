function Mostrar() {
    var repeticiones = parseInt(prompt("Ingrese el numero de veces a repetir:"));
    while (isNaN(repeticiones) || repeticiones <= 0) {
        repeticiones = parseInt(prompt("Error. Ingrese el numero de veces a repetir:"));
    }
    for (var i = 1; i <= repeticiones; i++) {
        alert(i + "- Hola UTN FRA");
    }
}