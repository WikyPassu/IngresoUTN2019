/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
    var suma = n1 + n2;
    alert(n1+" + "+n2+" = "+suma);
}

function restar()
{
	var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
    var resta = n1 - n2;
    alert(n1+" - "+n2+" = "+resta);
}

function multiplicar()
{ 
	var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
    var multi = n1 * n2;
    alert(n1+" x "+n2+" = "+multi);
}

function dividir()
{
	var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
    var div = n1 / n2;
    alert(n1+" / "+n2+" = "+div);
}

