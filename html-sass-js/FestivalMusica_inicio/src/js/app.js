    document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
    // srollNav();
    navegacionFija();

}

function navegacionFija() {
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    const body = document.querySelector("body");

    window.addEventListener("scroll", function() {
        if(sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add("fijo");
            body.classList.add("body-scroll");
        } else {
            barra.classList.remove("fijo");
            body.classList.remove("body-scroll");

        }
        
    });
}

// function srollNav() {
//     // const enlaces = document.querySelectorAll(".navegacion-principal a")

//     // enlaces.forEach( enlace => {
//     //     enlace.addEventListener("click", function(e){
//     //         e.preventDefault();

//     //         const seccionScroll = e.target.attributes.href.value;
//     //         const seccion = document.querySelector(seccionScroll);
//     //         seccion.srollIntoView({behavior: "smooth"});
//     //     });
//     // })
// }

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for(let i =1; i <= 12; i++) {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="picture/avif">
            <source srcset="build/img/thumb/${i}.webp" type="picture/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen Galeria">
        `;

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="picture/avif">
            <source srcset="build/img/grande/${id}.webp" type="picture/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen Galeria">
        `;
    
    // crea overlay con la imagen
    const overlay = document.createElement("div");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // Al hacer click en cualquier parte del overlay se quita la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body")
    }

    // Boton para cerrar el Modal
    const cerrarModal = document.createElement("p");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body");
    }
    overlay.appendChild(cerrarModal);

    // Añadirlo al HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body")
}