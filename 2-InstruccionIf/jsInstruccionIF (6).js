function Mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);
    if(edad >= 18){
        alert("Es adulto");
    }
    else if(edad >= 13){
        alert("Es adolescente");
    }
    else{
        alert("Es niño");
    }
}