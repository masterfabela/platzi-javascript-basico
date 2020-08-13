var a = Boolean('true');

console.log(a);

var edad = 0;
var dni = '';

var persona = {
  dni: dni || 'Sin asignar',
  edad: edad || 18,
};

if (edad) {
  console.log('edad definida');
}

console.log(persona);
