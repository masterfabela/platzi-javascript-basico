var frutas = ['Manzana', 'Platano', 'Cereza', 'Fresa'];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[2]);

var masFrutas = frutas.push('Uvas');
console.log(frutas);
console.log(frutas.length);

var ultimo = frutas.pop();
console.log(frutas);

var nuevaLongitud = frutas.unshift('Uvas');
console.log(frutas);

var borrarFruta = frutas.shift();
console.log(frutas);

var posicion = frutas.indexOf('Cereza');
console.log(posicion);
console.log(frutas[2]);
