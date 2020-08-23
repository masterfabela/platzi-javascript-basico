function Coche(marca, modelo, anho) {
  this.marca = marca;
  this.modelo = modelo;
  this.anho = anho;
}

var arrayCoches = [];

for (var i = 0; i < 30; i++) {
  arrayCoches.push(new Coche('Tesla', 'Model X', 2020));
}

console.log(arrayCoches);
