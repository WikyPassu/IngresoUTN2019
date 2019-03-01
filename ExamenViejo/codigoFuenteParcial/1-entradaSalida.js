//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var lado = parseInt(document.getElementById("lado").value);
    if (isNaN(lado) || lado <= 0){
        alert("Los datos ingresados son incorrectos.")    
    }
    else {
        var perimetro = lado * 3;
        alert("Base ingresada: "+lado+" cm.\nPerimetro del triangulo equilatero: "+perimetro+" cm.");
    }
}

