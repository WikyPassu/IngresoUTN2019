function Mostrar() {
	var nota = Math.floor(Math.random() * 10 + 1);
	if (nota == 9 || nota == 10) {
		alert("Nota: " + nota + "\nEXCELENTE");
	}
	else if (nota >= 4 && nota <= 8) {
		alert("Nota: " + nota + "\nAPROBÓ");
	}
	else {
		alert("Nota: " + nota + "\nVamos, la próxima se puede");
	}
}