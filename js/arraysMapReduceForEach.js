const datos = [
  [3.4, 5.6, 3.2],
  [6.5, 4.5, 4.3],
  [5.6, 3.2, 5.6],
  [2.6, 3.2, 8.6],
];

// Por cada elemento del array necesito el promedio del conjunto de datos (Array.map)
// [3.4, 4.5, 5.2, 5.9]

datos.map((items) => {
  const suma = items[0] + items[1] + items[2];
  return suma / 3;
});

datos.map((items) => {
  let suma = 0;

  for (const item of items) {
    suma = suma + item;
  }

  return suma / items.length;
});

datos.map((items) => {
  let suma = 0;
  items.forEach((item) => {
    suma = suma + item;
  });
  return suma / items.length;
});

// [3.4, 5.6, 3.2]
const promedio = (items) => {
  const suma = items.reduce((acumulador, item) => {
    return acumulador + item;
  }, 0);
  return suma / items.length;
};

const result = datos.map(promedio);
 
/*

Arrreglo:                [[1,2,2],[2,2,2],[4,4,4]] 
indice:                       0       1         2
indice interno:             0 1 2   0 1 2   0 1 2
*/




// Ejemplo de arrays
function contarNumerosPares(arreglo) {
  return arreglo.reduce((acc, item, index) => {
      if (item %2 === 0) {
        acc++;
      }

      return acc;
    }, 0);
}

let listaNumeros = [32, 43, 15, 3, 1, 67, 80, 100];
contarNumerosPares(listaNumeros);
