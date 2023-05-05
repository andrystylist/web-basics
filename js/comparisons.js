// Operador de igualdad == (dos ==)
// compara los valores
console.log(4 == 5);
console.log("Hola" == "Hola");
console.log("Hola" == "hola");

// No utilizar éste operador para comparar arrays ya que éste compara los espacios de memoria en el que están los arrays en vez de sus valores
console.log("[1, 2, 3] == [1, 2, 3] ", [1, 2, 3] == [1, 2, 3]);

const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log("[1, 2, 3] == [1, 2, 3] ", arr1 == arr2);

// Operador de igualdad estricta === (tres =)
// compara los valores y tipos de datos
console.log("9 === 9 ", 9 === 9);
console.log("9 == 9 ", 9 == 9);
console.log('9 == "9" ', 9 == "9");
console.log('9 === "9"', 9 === "9");


// Operador de Desigualdad !=
console.log("4 != 5 ", 4 != 5);
console.log("3 != 3 ", 3 != 3);
console.log('"Hola" != "Hola" ', "Hola" != "Hola");
console.log('"Hola" != "hola" ', "Hola" != "hola");

// Operador de Desigualdad Estricta !==
console.log("4 !== 5 ", 4 !== 5);
console.log("3 !== 3 ", 3 !== 3);
console.log('"Hola" !== "Hola" ', "Hola" !== "Hola");
console.log('"Hola" !== "hola" ', "Hola" !== "hola");

// Utilizar siempre el operador de igualdad estricta === (Buena práctica)
// Utilizar siempre el operador de deigualdad estricta !== (Buena práctica)
