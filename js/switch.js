/*premite escribir codigo para sustituir condicional, primero se coloca la palabra switch (el valor a comparar) 
se definen casos especificos para la variable y siempre es importante cerrar cada caso con sentencia breack

*/

function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;

}console.log(clasificarValor(2))

