var edad = 123;

if (edad === 18) {
	console.log('Puedes Votar, Sera tu primerito dia');
} else if (edad > 18) {
	console.log('Puedes Votar de nuevo');
} else {
	console.log('No puedes votar');
}

var numero = 1;

var resultado = numero === 1 ? 'Si, soy un uno' : 'No, no soy un uno';
console.log(resultado);

var numero = 34;

resultado = numero || 5;

resultado = numero > 10 ? numero : 5;

if (numero > 10) {
	resultado = numero;
} else {
	resultado = 5;
}

var casa = {
	altura: numero > 10 ? numero : 5,
};

console.log(casa);

console.log(resultado);
