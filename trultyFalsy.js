var a = Boolean('true');

// Falsos
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));

// Verdadeiros
console.log(Boolean([]));
console.log(Boolean('a'));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean(() => {}));
console.log(Boolean(function () {}));

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
