// detectar la rotación de la pantalla del movil, para saltar a calculadora.html
// si la pantalla está en vertical, se queda en index.html
// si la pantalla está en horizontal, se va a calculadora.html

// SOLO FUNCIONA EN MOVILES
// detectar la rotación de la pantalla del movil
window.addEventListener("orientationchange", function () {
    // si la pantalla está en vertical, se queda en index.html
    if (screen.orientation.type === "portrait-primary") {
        window.location.href = "index.html";
    }
    // si la pantalla está en horizontal, se va a calculadora.html
    else if (screen.orientation.type === "landscape-primary") {
        window.location.href = "calculadora.html";
    }
});

//  ****************
// *  CALCULADORA *
// ****************
// Array de resultados
let resultados = [];

// recoger los botones en contantes
const btnSumar = document.getElementById("btnsumar");
const btnRestar = document.getElementById("btnrestar");
const btnMultiplicar = document.getElementById("btnmultiplicar");
const btnDividir = document.getElementById("btndividir");
const btnPorcentaje = document.getElementById("btnporcentaje");
const btnBorrar = document.getElementById("btnborrar");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnDecimal = document.getElementById("btndecimal");
const btnIgual = document.getElementById("btnigual");

const panel = document.getElementById("panelresultados");

// Cada uno de los botones numéricos tienen que añadir su valor al panel de resultados
// al hacer click en el botón
btn0.addEventListener("click", function () {
    panelresultados.value += "0";
});
btn1.addEventListener("click", function () {
    panelresultados.value += "1";
});
btn2.addEventListener("click", function () {
    panelresultados.value += "2";
});
btn3.addEventListener("click", function () {
    panelresultados.value += "3";
});
btn4.addEventListener("click", function () {
    panelresultados.value += "4";
});
btn5.addEventListener("click", function () {
    panelresultados.value += "5";
});
btn6.addEventListener("click", function () {
    panelresultados.value += "6";
});
btn7.addEventListener("click", function () {
    panelresultados.value += "7";
});
btn8.addEventListener("click", function () {
    panelresultados.value += "8";
});
btn9.addEventListener("click", function () {
    panelresultados.value += "9";
});

// si se clican los botones de operaciones matematicas, se añaden al panel de resultados
btnSumar.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += "+";
    }
});
btnRestar.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += "-";
    }
});
btnMultiplicar.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += "*";
    }
});
btnDividir.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += "/";
    }
});
btnPorcentaje.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += "%";
    }
});

// boton de decimal
btnDecimal.addEventListener("click", function () {
    // comprobar si el ultimo caracter es un operador
    let ultimoCaracter = panelresultados.value.slice(-1);
    // no añadir si hay alguno de estos operadores al final
    if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%" ||
        ultimoCaracter === "."
    ) {
    } else if (panelresultados.value === "") {
    } else {
        panelresultados.value += ".";
    }
});

// boton de resultados
btnIgual.addEventListener("click", function () {
    // añadir la operación al array de resultados
    resultados.push(panelresultados.value);
    // evaluar el panel de resultados
    panelresultados.value = eval(panelresultados.value);
    // añadir el resultado al array de resultados
    resultados.push(panelresultados.value);
});

// boton de borrar
btnBorrar.addEventListener("click", function () {
    panelresultados.value = "";
});

// boton de guardar en portapapeles
// ********************************

panel.addEventListener("click", function () {
    // coge el resultade de value y se lo lleva al portapapeles
    navigator.clipboard.writeText(panel.value);

    // cambio de estilos
    panel.style.backgroundColor = "red";
    setTimeout(() => {
        panel.style.backgroundColor = "white";
    }, 2000);
});
