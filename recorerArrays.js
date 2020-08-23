var articulos = [
  {
    nombre: 'Bici',
    costo: 3000,
  },
  {
    nombre: 'Tv',
    costo: 2500,
  },
  {
    nombre: 'Libro',
    costo: '320',
  },
  {
    nombre: 'Celular',
    costo: 1000,
  },
  {
    nombre: 'Laptop',
    costo: 2500,
  },
  {
    nombre: 'Teclado',
    costo: 500,
  },
  {
    nombre: 'Audifonos',
    costo: '2500',
  },
];

var articulosFiltrados = articulos.filter((articulo) => {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

var nombreArticulos = articulos.map((articulo) => {
  return articulo.nombre;
});

console.log(nombreArticulos);

var elementoEncontrado = articulos.find((articulo) => {
  return articulo.costo <= 500;
});

console.log(elementoEncontrado);

articulos.forEach((elemento) => {
  console.log(elemento.nombre);
});

var articulosVaratos = articulos.some((articulo) => {
  return articulo.costo <= 700;
});

console.log(articulosVaratos);
