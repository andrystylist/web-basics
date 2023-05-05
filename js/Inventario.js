export default function Inventario (nombre) {
    this.nombre = nombre;
    this.articulos = {};
}

Inventario.prototype.getNombre = function () {
    return this.nombre;
};

Inventario.prototype.getArticulos = function() {
    return this.articulos;
};

Inventario.prototype.addArticulo = function(nombre) {
    const cantActualArticulo = this.articulos[nombre] || 0;
    this.articulos[nombre] = cantActualArticulo + 1;
    return this;
}

export const message = "Hola mundo";