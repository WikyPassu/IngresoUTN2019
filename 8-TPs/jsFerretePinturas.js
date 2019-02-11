/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var f = parseFloat(document.getElementById("Temperatura").value);
    var c = (f - 32) * 5 / 9;
    alert(f.toFixed(2)+" grados Fahrenheit son "+c.toFixed(2)+" grados Celcius");
}

function CentigradosFahrenheit () 
{
	var c = parseFloat(document.getElementById("Temperatura").value);
    var f = (c * 9 / 5) + 32;
    alert(c.toFixed(2)+" grados Celcius son "+f.toFixed(2)+" grados Fahrenheit");
}
