// This

const reservacion = {
    nombre: "Juan",
    apellido: "De la Torre",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log("El Cliente " + this.nombre + " reservó y su cantidad a pagar es de " + this.total);
        // El this. sirve para referenciar a informacion sobre el mismo objeto
    }
};

console.log( reservacion.informacion() );