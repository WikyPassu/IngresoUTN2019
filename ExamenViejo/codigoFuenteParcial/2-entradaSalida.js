//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe = parseFloat(prompt("Ingrese un importe:"));
    while (isNaN(importe) || importe <= 0) {
        importe = parseFloat(prompt("Error. Reingrese un importe:"));
    }
    var iva = importe * 0.21;
    var importeFinal = importe + iva;
    document.getElementById("importe").value = "$" + importeFinal.toFixed(2);
    alert("Importe ingresado: $" + importe.toFixed(2) + "\nImporte final mas IVA (21%): $" + importeFinal.toFixed(2));
}

