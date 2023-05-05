/* definimos funcion palabra reservada function luego asignamos nombre y 
justo al lado par de parentesis y luego entre llaves con un espaciado, comenzamos a 
 escribir el cuerpo */
 
function  sumar(a, b) {
    var suma = a + b;
    console.log(" El resultado de " + a  + " + " + b + " es: "  +  suma);
};

sumar(5, 3);

// puedo asignar el valor a una variable 

var x = 5;
var y = 3;

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " +  cadena2 + " " + cadena3);
};

concatenarTresCadenas("Estoy", "aprendiendo", " a programar ");



/* no todas las variables se pueden usar en todo el codigo variables globales 
(se usan en cualquier lugar esta definida en el programa principal y no dentro de una funcion ) */

var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
    console.log(miVariableGlobal);
};

miFuncion();

console.log(miVariableGlobal);

//variables locales, son variables que definimos dentro de una funcion y la podemos usar en esa funcion 

function miFuncionLocal() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
};

miFuncion();

//console.log(miVariableLocal); no se puede llamar a esa variables por fuera de la funcion da error 

//ambito globlal vs ambito local con el mismo nombre 

var miNombre = "Andry";

function mostrarElNombre() {
    var miNombre = "Gino";
    console.log(miNombre);
}
mostrarElNombre();

//cuando se ejecute la linea de la funcion se retornar con la palabra return

function suma(a, b) {
   return a + b;
};

console.log(suma(5, 3));
