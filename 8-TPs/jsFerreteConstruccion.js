/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var perimetro = (largo * 2 + ancho * 2) * 3;
    alert("Cantidad de alambre necesario: "+perimetro.toFixed(2)+" metros");
}
function Circulo () 
{  
    var radio = parseFloat(document.getElementById("Radio").value);
    var longitud = radio * 2  * 3.14;
    var resultado = longitud * 3;
    alert("Cantidad de alambre necesario: "+resultado.toFixed(2)+" metros");
}
function Materiales () 
{
	var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var bolCem = parseInt(largo * ancho * 2);
    var bolCal = parseInt(largo * ancho * 3);
    alert("Cantidad de bolsas de cemento necesarias:  "+bolCem+"\nCantidad de bolsas de cal necesarias: "+bolCal);
}