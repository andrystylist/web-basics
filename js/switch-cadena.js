var producto = "hamburguesa";

switch (producto) {
    case "pizza":
        console.log("la pizza básica cuesta $10");
        break;
    case "hamburguesa":
        console.log("las hamburguesas cuestan $6");
        break
    case "helado":
        console.log("los helados cuestn $3");
        break
}

// en un principio al ejecutar este codigo, va aparecer el mensaje del 2do caso, porque yo defini a producto como hamburguesa 
// si quiero ejecutar otra linea despues del switch debo hacerlo por fuera del switch

console.log("luego de switch");

//EJERCICIO OPCION PREDERTEMINAD SENTENCIA SWITCH, si ninguno de los valores es el opcion, en 
//caso de que ninguno concuerde se hara una sentencia default, es como el equivalente al else un respaldo

function seleccionarIdioma(valor){
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "ingles";
            break;
        default:
            idioma = "italiano";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma(7))

