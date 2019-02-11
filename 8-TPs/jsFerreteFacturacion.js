/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1 = parseFloat(document.getElementById("PrecioUno").value);
    var p2 = parseFloat(document.getElementById("PrecioDos").value);
    var p3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma = p1 + p2 + p3;
    alert("La suma de los importes ingresados es "+suma.toFixed(2));
}
function Promedio () 
{
	var p1 = parseFloat(document.getElementById("PrecioUno").value);
    var p2 = parseFloat(document.getElementById("PrecioDos").value);
    var p3 = parseFloat(document.getElementById("PrecioTres").value);
    var promedio = (p1 + p2 + p3) / 3;
    alert("El promedio de los importes ingresados es "+promedio.toFixed(2));
}
function PrecioFinal () 
{
	var p1 = parseFloat(document.getElementById("PrecioUno").value);
    var p2 = parseFloat(document.getElementById("PrecioDos").value);
    var p3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma = p1 + p2 + p3;
    var aumento = suma * 0.21;
    var pf = suma + aumento;
    alert("El precio final (mas IVA 21%) es "+pf.toFixed(2));
}