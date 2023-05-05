// const MI_CONSTANTE = 5;
// const VENEZOLANO = "P";
// const EXTRANJERO = "E";

// const usuario = {
//     id: 1,
//     name: "Andry",
//     lastName: "Peña",
//     email: "andry@mail.com",
// };

// usuario.birthday = "21-01-1988";
// usuario.name = "Andry Carolina";
// console.log(usuario);

// const numeros = [];

// numeros.push(4);
// numeros.push(76);
// numeros.push(7);
// numeros.push(3);


// console.log(numeros);
// const ultimoNumero = numeros.pop();

// console.log(ultimoNumero);
// console.log(numeros);

// numeros[0] = 1;

// console.log(numeros);

// const numberSet = new Set([1, 2, 3, 4, 5, 5, 4, 8]);

// class User {
//     id;
//     name;
//     lastName;
//     email;
//     birthday;
//     password;

//     constructor(id, name, lastName, birthday) {
//         this.id = id;
//         this.name = name;
//         this.lastName = lastName;
//         this.birthday = birthday;
//     }

//     static login(email, password) {
//         return true;
//     }
// }

// const miUsuario = new User(4, "Jose Gabriel", "Gonzalez", "04/10/1987");

// console.log(miUsuario.name);

// User.login();


// function comoEs(name) {
//     let resultado = null;

//     if (name === "Andry") {
//         resultado = "Bonita";
//     } else if (name === "Gabriel") {
//         resultado = "Dale";
//     }

//     return resultado;
// }

// console.log(comoEs("Andry"));
// console.log(comoEs("Gabriel"));
// console.log(comoEs("Pepito"));

// // incrementar y decrementar // 

// let x = 1
// x
// let y = ++x
// y
// x

// let z= x++
// z
// x

// let a = x --
// a
// x

// let b = --x
// b
// x

// !true
// !false

// !!true
// true === true // true es igual a true? //
// true === false
// true !== true
// /* se utiliza tres iguales para comprobar tipo y valor en js*/
// // Operador logico AND se escribe  && //
// // Operador OR se escribe || //
// //condicionales IF //


// let operacion = 5 + 1;

// if (operacion >= 7) {
//   console.log('Es True');
// }
// else if (operacion < 7 && operacion > 2) {
//     console.log('Esta entre 7 y 2')
// }
// else {
//   console.log('Es menor de 2')
// }

// //sentencia Switch
// switch(operacion) {
//     case 0:
//       console.log("El resultado es 0");
//       breack;
//     case 1:
//     case 2:
//     case 3:
//       console.log("El resultado es 1 o 2 o 3");
//       breack;    
//   }
  
//   Math.random(10);
//   Math.random(10);
//   Math.random(10);
//   Math.random(10);

// Poo con prototipos

// import Inventario from './Inventario.js';

// const libreria = new Inventario("Mi Librería");
// console.log(libreria.getNombre());
// console.log(libreria.getArticulos());

// libreria.addArticulo("Don Quijote de la Mancha")
//     .addArticulo("Don Quijote de la Mancha")
//     .addArticulo("Don Quijote de la Mancha");

// console.log(libreria.getArticulos());

// libreria.addArticulo("1984");
// libreria.addArticulo("1984");

// libreria.addArticulo("Un Mundo Feliz");

// console.log(libreria.getArticulos());


// Tipo de Datos undefined, null boolean, string, symbol, number, y object.

//variables camelcase 

var miVariable = "freeCodeCamp";
console.log(miVariable)

miVariable = 15
console.log(miVariable)

var miNombre = "Andry" //descriptiva debe ser un nombre que se entienda a que nos referimos

var a; // no asignamos 
var b = 2; // si asignamos 

console.log(a); //undefine
console.log(b); // Tiene valor

a = 10; // aqui asignamos con = operador de asignacion Javascrip
console.log(a)

var a = 5;
var b = a; // asignando el valor de una variable a otra, asignamos 5 a b
console.log(a)
console.log(b)

var a = 5;
var b;
b = a; // aqui tambien estamos asignando valor de una variable a otra

//INICIALIZANDO VARIABLES

var x = 9; // Inicializar la variable 
var miIdioma = "Español"

// variables no inicializada todavia no tiene valor asignado es undefine

var a;
var b;

console.log(a)
a = 56;

//MAYUSCULAS Y MINUSCULAS puede sar error o funcionar correctamente CAse - sensitive 

var miVariable = 5;
//console.log(MIVARIABLE); //error no esta definida esa variable con mayusculas
console.log(miVariable) // si muestra su valor CAse - sensitive 

// modificar valor de una variable INCREMENTAR 

var librosComprados = 105;
console.log(librosComprados);// valor inicial 105

// opcion 1

librosComprados = librosComprados + 1; //se evalua el valor de la derecha (105) le sumamos 1 y se lo asignamos a la nueva variable
console.log(librosComprados)

//opcion 2 solo ara incrementar en 1 

librosComprados++; // toma el valor actual y sumale uno 
console.log(librosComprados)

//REDUCIR VALOR ACTUAL EN UNA VARIABLE 

var numeroDeEstudiantes = 256;
numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes)

numeroDeEstudiantes--;
console.log(numeroDeEstudiantes)

// reducir o incrementar en otro valor que no sea de uno en uno

var a = 23
//a = a + 5;
console.log(a)

a += 6; //añade 6 y asignale ese valor 
console.log(a)


var totalVentas = 1345.3;
totalVentas += 250,40; // incrementando el valor en este valor
console.log(totalVentas)

// tambien lo podemos reducir con el signo (-)

// concatenar variables

var nombreCompleto = "Allan" + " Turing"
console.log(nombreCompleto)

var verbo = "Porgramar"

var mensaje =  "Estoy aprendiendo a " + verbo;
console.log(mensaje)

var mensajeCompleto = " Estoy aprendiendo a programar ";
var parteFinal = "con freeCode"
console.log(mensajeCompleto);

mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

//longitud cadena de caracteres 

var miCadena;
miCadena = "AB "; // cuenta espacio
console.log(miCadena.length);

//notacion de [] en Java script ayuda acceder a los caracteres de una cadena de caracteres

var lenguajeDeProgramacion = "JavaScript"
console.log(lenguajeDeProgramacion [3])

//inmutabilidad de cadenas de caracteres

var miCadenaString = "Jola, Mundo";
//miCadenaString [0] = "H"; // error
// no podemos cambiar un solo caracter debemos cambiarla toda

var miCadenaString = "Hola Mundo"
console.log(miCadenaString)


//corchetes ultimo caracter de una cadena es la longitud de la cadena - 1 porque se cuenta desde 0
var miCadenaString = "JavaScript";
console.log(miCadenaString[miCadenaString.length - 1]);

//palabras en blacno































