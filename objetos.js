var miCoche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  annio: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};

console.log(miCoche.marca);
console.log(miCoche.annio);
miCoche.detalleDelAuto();
