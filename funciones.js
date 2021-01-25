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

console.log(sumar(3, 3));

// ES5
var sumar1 = function (a, b) {
	return a + b;
};

// ES6
// Constante
const sumar2 = (a, b) => {
	return a + b;
};
// Variable //Restringida a ambito
let sumar3 = (a, b) => {
	return a + b;
};

function sumar(a, b) {
	return a + b;
}

console.log(sumar(3, 3));
