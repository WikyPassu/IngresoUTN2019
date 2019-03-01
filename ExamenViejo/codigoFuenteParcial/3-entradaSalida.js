//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var ancho = parseInt(document.getElementById("ancho").value);
    var largo = parseInt(document.getElementById("largo").value);
    if (isNaN(ancho) || isNaN(largo) || ancho <= 0 || largo <= 0) {
        alert("Los datos ingresados son invalidos.");
    }
    else {
        var perimetro = ancho * 2 + largo * 2;
        alert("Ancho del terreno: " + ancho + " metros\nLargo del terreno: " + largo + " metros\nPerimetro del terreno: " + perimetro + " metros cuadrados\nMetros de alambre necesarios para pasar 6 hilos: " + perimetro * 6 + " metros");
    }

}

