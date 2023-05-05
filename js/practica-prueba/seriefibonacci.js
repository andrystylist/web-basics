//dado un numero mostrar su serie fibonacci la serie fibonacci es un orden de numeros donde cada numero es la suma de los 2 anteriores serie para el 34= 0,1,1,2,3,5,8,13,21,34.... 



function fibonacci (numero) {
    const serie = [0, 1];
    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);   
    }
    return serie[numero];
} 
console.log(fibonacci(numero));

//recursividad es mAS LENTO

const fibonacci = n => {
    if (n < 2) return n
    return fibonacci(n - 2) + fibonacci(n - 1)
}


