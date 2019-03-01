//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var promedio, suma = 0, notaBaja, menor, alumno, contVar = 0, flag = 0;
    for (i = 1; i <= 6; i++) {
        var nota = parseInt(prompt("Alumno " + i + "- Ingrese la nota:"));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt("Error: Nota invalida.\nAlumno " + i + "- Ingrese la nota:"));
        }
        var sexo = prompt("Alumno " + i + "- Ingrese el sexo (f o m):");
        while (!(isNaN(sexo)) || sexo != "f" && sexo != "m") {
            sexo = prompt("Error: Sexo invalido.\nAlumno " + i + "- Ingrese el sexo (f o m):");
        }
        if (nota < menor || flag == 0) {
            menor = nota;
            alumno = i;
            flag = 1;
        }
        if (nota >= 6 && sexo == "m") {
            contVar++;
        }
        suma += nota;
    }
    promedio = suma / 6;
    alert("Promedio de notas total: " + promedio.toFixed(2) + "\nNota más baja: " + menor + " del alumno" + alumno + "\nCantidad de varones cuya nota ha sido mayor o igual a 6: " + contVar);
}

