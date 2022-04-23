const {src, dest, watch, parallel } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// Imagenes
const avif = require("gulp-avif");
const cache = require("gulp-cache");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

function css(done) {
    
    src("src/scss/**/*.scss")// Identificar el archivo .SCSS a compilar
        .pipe( plumber())//Para si hay un error que no se finalice la ejecución
        .pipe( sass() )//Compilarlo
        .pipe( dest("build/css")) //Almacenarla en el disco duro
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    done();
}

function versionWebp(done) {

    const opciones = {
        quality: 50
    };
    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"));
    done();
}

function versionAvif(done) {

    const opciones = {
        quality: 50
    };
    src("src/img/**/*.{png,jpg}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"));
    done();
}

function imagenes(done) {

    const opciones = {
        optimizationLevel: 3
    };
    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"));

    done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(versionWebp, versionAvif, imagenes, dev);