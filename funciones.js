// Funcion Declarativa

function miFuncion() {
	return 3;
}

miFuncion();

// Funcion Expresiva

var miFuncion = function (a, b) {
	return a + b;
};

miFuncion();

function saludarEstudiantes(estudiante) {
	console.log(`Hola ${estudiante}`);
}

saludarEstudiantes('fernando');

function sumar(a, b) {
	return a + b;
}

console.log(sumar(3, 3));
