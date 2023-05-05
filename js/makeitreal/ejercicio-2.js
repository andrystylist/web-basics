function asteriscos (str) {
    const lista = str.split("*");
    return lista.length - 1;
}
console.log(asteriscos("H*o*l*a"))
console.log(asteriscos("Hola"))