// querySelector
    // const heading = document.querySelector(".header__texto h2");
    // heading.textContent = "KLK";
    // console.log(heading);

// querySelectorAll
    // const enlaces = document.querySelectorAll(".navegacion a");
    // enlaces[0].textContent = "Nuevo Texto para Enlace";
    // enlaces[0].classList.add("nueva-clase");
    // enlaces[0].classList.remove("navegacion__enlace");

// getElementById

    // const heading2 = document.getElementById("heading");
    // console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el texto 
nuevoEnlace.textContent = "nuevo enlace";

// Agregar la clase
nuevoEnlace.classList.add("navegacion_enlace");

// Agregar al Documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos
console.log(1);

window.addEventListener("load", function() {
    console.log(2)
})

window.onload = function() {
    console.log(3);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log(4);
})

console.log(5);

window.onscroll = function() {
    console.log("scrolling...")
}
