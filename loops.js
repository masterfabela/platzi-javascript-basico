var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

/*
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
*/

for (estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

estudiantes.forEach((estudiante) => {
  saludarEstudiantes(estudiante);
});
