const {src, dest, watch, parallel } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

// JS
const terser = require("gulp-terser-js");

// Imagenes
const avif = require("gulp-avif");
const cache = require("gulp-cache");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

function css(done) {
    
    src("src/scss/**/*.scss")// Identificar el archivo .SCSS a compilar
        .pipe( sourcemaps.init())
        .pipe( plumber())//Para si hay un error que no se finalice la ejecución
        .pipe( sass() )//Compilarlo
        .pipe( postcss([autoprefixer(), cssnano()]))//Comprimir el codigo
        .pipe( sourcemaps.write("."))
        .pipe( dest("build/css")) //Almacenarla en el disco duro
    done();
}

function javascript(done) {
    src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/js"));
    
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

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
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(versionWebp, versionAvif, imagenes, javascript, dev);