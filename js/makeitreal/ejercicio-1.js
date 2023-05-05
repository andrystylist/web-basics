function calcularImpuestos(edad,ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos * 0.40;
    }
    return 0;
}

console.log(calcularImpuestos(18, 1000)) // retorna 400
console.log(calcularImpuestos(40, 10000)) // retorna 4000
console.log(calcularImpuestos(17, 5000)) // retorna 0