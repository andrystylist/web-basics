// .PUSH AGREGAR ELEMENTOS AL FINAL DEL ARREGLO

var estaciones = ['Invierno', 'Otoño', 'primavera'];

estaciones.push("verano");
console.log(estaciones)


// .pop no toma ningun argumento remueve el ultimo elemento y lo puede asignar a una variable y retornar 

var estacion;
var estacioness;

estacioness = ["Invierno", "Otoño", "Primavera", "Verano"];

estacion = estacioness.pop();

console.log(estacioness);

console.log(estacion);

// Remover el primer elemento del arreglo .shift ()

var estacioness = ["Invierno", "Otoño", "Primavera", "Verano"];
estacioness.shift();
console.log(estacioness)

// agregar .unshift elemento al principio del arreglo y dentro parentesis el valor a agregar 

var estacioness = ["Invierno", "Otoño", "Primavera", "Verano"];
estacioness.unshift("Nueva");
console.log(estacioness)





