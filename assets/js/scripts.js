// Stars
var totalObjetos = 1500;
var velocidadMaxima = 1;
var tamanoEstrella = 2.5;
var frecuenciaParpadeo = 50000;
var frecuenciaEstrellaFugaz = 250;
var velocidadEstrellaFugaz = 75;
var tamanoEstrellaFugaz = 3;

window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ) {
                setInterval(callback, 75);
            };
})();

var canvas = document.getElementById('field');
canvas.width = document.width || 1024;
canvas.height = document.height || 768;
var ctx = canvas.getContext("2d");

var estrellas = [];
var estrellasFugaces = [];
this.iniciar();

setInterval(actualizar, 30);
requestAnimFrame(dibujar);

function iniciar() {
    for(i=0;i<totalObjetos;i++) {
        estrellas.push(new Estrella());
    }
}

function dibujar() {
    requestAnimFrame(dibujar);
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, .4)";
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    for(f=0;f<estrellas.length;f++) {
        estrellas[f].Actualizar();
        estrellas[f].Dibujar();
    }
    for(f=0;f<estrellasFugaces.length;f++) {
        estrellasFugaces[f].Actualizar();
        estrellasFugaces[f].Dibujar();
    }
}

function actualizar() {
    if(Math.round((Math.random()*frecuenciaEstrellaFugaz))==1) {
            estrellasFugaces.push(new EstrellaFugaz());
    }
    for(f=0;f<estrellasFugaces.length;f++) {
        if (estrellasFugaces[f].X < -1000) {
            estrellasFugaces.splice(f,1);
        }
    }
}


function Estrella(){
  this.X = Math.random()*canvas.width;
  this.Y = Math.random()*canvas.height;
  this.Velocidad = (Math.random()*velocidadMaxima);
  this.Opacidad = (((Math.random()*10)+1)*0.1);
  
    this.Actualizar = function() {
        this.X -= this.Velocidad;

        if(this.X<0) { // reiniciar
            this.X = canvas.width+1;
        }
    };
  
    this.Dibujar = function() {
        ctx.fillStyle = "rgba(255,255,255," + this.Opacidad + ")";

        if(Math.round((Math.random()*frecuenciaParpadeo))==1) {
            ctx.fillRect(this.X,this.Y,tamanoEstrella+2,tamanoEstrella+2);
        } else {
            ctx.fillRect(this.X,this.Y,tamanoEstrella,tamanoEstrella);
        }
    };
}

function EstrellaFugaz() {
    this.X = 2000;
    this.Y = Math.random()*canvas.height;
    this.Longitud = 1000;
  
    this.Actualizar = function() {
        this.X -= velocidadEstrellaFugaz;
    };
  
    this.Dibujar = function() {
        for(var i = 0; i < this.Longitud; i++) {
            opacidad = (0.8 - (0.001 * i));
            ctx.fillStyle = "rgba(255,255,255," + opacidad + ")";
            ctx.fillRect(this.X+i,this.Y,tamanoEstrellaFugaz,tamanoEstrellaFugaz);
        }
    };
}

// Arreglo de frases
const frases = [
    "Depura tus errores y construye la mejor versión de ti, cada línea cuenta",
    "Paciencia, pequeño saltamontes, aún falta mucho por aprender",
    "Depura tus dudas, compila tus sueños",
    "Refactoriza tus debilidades en fortalezas",
    "En el universo digital, tú eres el arquitecto de tu realidad. Protege tu creación, evoluciona constantemente y deja tu huella en el mundo",
    "La programación es tu pasión, conviértela en tu legado",
    "La sensación de ver tu código cobrar vida es incomparable",
    "Un bug no es el final del camino, es solo una oportunidad para aprender algo que no sabías antes",
    "El código, como la existencia, puede parecer vacío. Pero cada función, cada loop, está ahí para darle propósito al sistema",
    "La perfección en el desarrollo no se alcanza de un solo intento. Cada error es una versión previa de la excelencia",
    "No temas a las críticas de tu código. Solo a través del análisis y crítica se alcanza la mejora",
    "La creatividad en el desarrollo surge cuando combinas lo que sabes con lo que aún no entiendes. Ahí es donde sucede la magia",
    "Todo proyecto, por pequeño que sea, tiene el potencial de cambiar el mundo"
];

// Seleccionamos un índice aleatorio del arreglo
const indiceAleatorio = Math.floor(Math.random() * frases.length);

// Obtenemos la frase aleatoria
const fraseAleatoria = frases[indiceAleatorio];

// Modificamos el texto del elemento en el HTML
const textoElemento = document.getElementById("main__phrase");
textoElemento.textContent = fraseAleatoria;