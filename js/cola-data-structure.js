function agregarALaFila(arreglo, elemento) {
    arreglo.push(elemento); // agrega al final del arreglo
    return arreglo.shift(); // remueve el primer elemento y retorna el elemento removido
};

var miArreglo = [1, 2, 3, 4, 5];

// console.log("Antes: " + JSON.stringify(miArreglo));
console.log("Antes: ", miArreglo);

console.log(agregarALaFila(miArreglo, 6));

console.log("Despues: ", miArreglo);

// Ahora vamos a implementar una estrategia diferente
// para manejar la estructura de datos de tipo Cola

class Cola {
    constructor(items = []) {
        this.items = items;
    }

    /**
     * Agrega un elemento al final de la cola
     * 
     * @param {*} element 
     * @returns this
     */
    agregar(elemento) {
        this.items.push(elemento);
        return this;
    }

    /**
     * Remueve el primer elemento de la lista
     * 
     * @returns 
     */
    remover() {
        return this.items.shift();
    }
}

const myQueue = new Cola([1, 2, 3, 4]);
myQueue.agregar(10)
       .agregar(11)
       .agregar(12)
       .agregar(13)
       .agregar(14)
       .agregar(15);

console.log(myQueue.items);

console.log(myQueue.remover());

console.log(myQueue.items);

console.log(myQueue.remover());

console.log(myQueue.items);

myQueue.agregar(16);

console.log(myQueue.items);

