
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