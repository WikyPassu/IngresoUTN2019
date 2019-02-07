/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
    var suma;
    suma = n1 + n2;
    alert("La suma entre "+n1+" y "+n2+" es "+suma);
}

