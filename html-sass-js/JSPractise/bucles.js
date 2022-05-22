// For loop

// let imparList = [];
// let parList = [];

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         parList.push(i);
//     } else {
//         imparList.push(i);
//     }
// }

// console.log("Lista de Pares: " + parList)
// console.log("Lista de Impares: " + imparList)

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500},
    { nombre: "LG", precio: 833},
    { nombre: "SONY", precio: 1245},
    { nombre: "Xiaomi", precio: 600},
    { nombre: "Samsung", precio: 1200},
];

// for (let i = 0; i <= carrito.length; i++) {
//     console.log("El producto " + carrito[i].nombre + " con un precio de ", + carrito[i].precio + "€ ")
// };

// ForEach
const arreglo1 = carrito.forEach( producto => producto.nombre);

// map

const arreglo2 = carrito.map( producto => producto.nombre);

console.log(arreglo1)
console.log(arreglo2)



