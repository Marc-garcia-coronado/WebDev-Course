// POO


// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500
}


// Object Constructor

function Producto(nombre, precio, disponible = false) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto("Monitor curvo de 49'", 800)
const producto3 = new Producto("MacBook Pro", 2100)
const producto4 = new Producto("MacBook Air", 1200, true)


console.log(producto2)
console.log(producto3)
console.log(producto4)