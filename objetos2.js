function Auto(marca, modelo, anho) {
  this.marca = marca;
  this.modelo = modelo;
  this.anho = anho;
}

var autoNuevo = new Auto('Tesla', 'Model 3', '2020');
var autoNuevo2 = new Auto('Tesla', 'Model X', '2018');
var autoNuevo3 = new Auto('Toyota', 'Corolla', '2020');
console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);
