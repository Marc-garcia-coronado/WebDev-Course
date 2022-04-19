// Classes

class Producto {
    constructor(nombre, precio, disponibilidad=true){
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }

    formatearProducto() {
        if (this.disponibilidad == true) {
            return 'El nombre del producto es ' + this.nombre + " con un precio de " + this.precio + " y esta disponible";
        } else {
            return 'El nombre del producto es ' + this.nombre + " con un precio de " + this.precio + " y no esta disponible"; 
        }
    }   
}

const producto2 = new Producto("Monitor curvo de 49'", 800, false)
const producto3 = new Producto("MacBook Pro", 2100, false)
const producto4 = new Producto("MacBook Air", 1200, true)

console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())
console.log(producto4.formatearProducto())