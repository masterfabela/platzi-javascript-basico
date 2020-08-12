// Declarativas

function miFuncion() {
  return 3;
}

miFuncion();

// Expresion

var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

saludarEstudiantes('diego');

function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4));
