// console.log("test");

//CREATE VARIABLES FOR DOM ELEMENTS
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

// const number = document.getElementById("number");
const operation = document.getElementById("operation");

//RESULT ELEMENT WHERE THE RESULT IS DISPLAYED
const result = document.getElementById("input_result");

const btnMc = document.getElementById("btnMc");
const btnMplus = document.getElementById("btnMplus");
const btnAC = document.getElementById("btnAC");
const btnSubtract = document.getElementById("btnSubtract");
const btnAdd = document.getElementById("btnAdd");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnPercent = document.getElementById("btnPercent");

const btnPoint = document.getElementById("btnDecimal");
const btnEquals = document.getElementById("btnEquals");

//CONSTANTS
const NUMBER = "number";
const OPERATION = "operation";
const RESULT = "result";

let resultValues = [];

//ORIENTATION CHANGE - LOADING DIFFERENT PAGES
window.addEventListener("orientationchange", function () {
  if (this.screen.orientation.type === "portrait-primary") {
    this.window.location.href = "index.html";
  } else if (this.screen.orientation.type === "landscape-primary") {
    this.window.location.href = "calculator.html";
  }
});



//Create class calculator and its methods
class Calculator {
  constructor() {
    this.number = 0;
    this.operation = "";
    this.result = 0;
    this.clear();
  }

  clear() {
    this.number = 0;
    this.operation = "";
    this.result = 0;
  }

  add() {
    this.result = this.number + this.number;
    this.number = 0;
    this.operation = "+";
  }

  subtract() {
    this.result = this.number - this.number;
    this.number = 0;
    this.operation = "-";
  }

  multiply() {
    this.result = this.number * this.number;
    this.number = 0;
    this.operation = "*";
  }

  divide() {
    this.result = this.number / this.number;
    this.number = 0;
    this.operation = "/";
  }

  equal() {
    this.result = this.number;
    this.number = 0;
    this.operation = "=";
  }

  clearNumber() {
    this.number = 0;
  }

  clearOperation() {
    this.operation = "";
  }

  clearResult() {
    this.result = 0;
  }

  getNumber() {
    return this.number;
  }

  getOperation() {
    return this.operation;
  }

  getResult() {
    return this.result;
  }
}
//Create instance of class calculator
const calculator = new Calculator();

/* ----------------------------- */
/* CALCULATOR */
/* ----------------------------- */







//RESULT
result.addEventListener("click", function () {
  //copy to the clipboard
  navigator.clipboard.writeText(result.value);
  //   alert("Copiado al portapapeles");
  result.style.backgroundColor = "#00ff00";
  setTimeout(() => {
    result.style.backgroundColor = "#f1f0f0";
  }, 2000);
  if (result.value === undefined) {
    result.value = "";
  }
});

//CLEAR RESULT
btnAC.addEventListener("click", function () {
  result.value = "";
});

//OPERATIONS
btnSubtract.addEventListener("click", function () {
  let lastchar = result.value.slice(-1);
  if (
    lastchar === "%" ||
    lastchar === "-" ||
    lastchar === "/" ||
    lastchar === "*" ||
    lastchar === "+" ||
    lastchar === "x" ||
    lastchar === ","
  ) {
  } else if (result === "") {
  } else {
    result.value += "-";
  }
});

btnPercent.addEventListener("click", function () {
  let lastchar = result.value.slice(-1);
  if (
    lastchar === "%" ||
    lastchar === "-" ||
    lastchar === "/" ||
    lastchar === "*" ||
    lastchar === "+" ||
    lastchar === "x" ||
    lastchar === ","
  ) {
  } else if (result === "") {
  } else {
    result.value += "%";
  }
});

//EVALUATE AND SAVE RESULT
btnEquals.addEventListener("click", function () {
  //ADD OPERATION TO THE RESULT VALUES
  result.push(result.value);
  //EVALUATE THE RESULT
  result.value = eval(result.value);
  //ADD THE RESULT TO THE RESULT VALUES
  resultValues.push(result.value);
});

//NUMBERS
btn1.addEventListener("click", function () {
  result.value += btn1.innerText;
});
btn2.addEventListener("click", function () {
  result.value += btn2.innerText;
});
btn3.addEventListener("click", function () {
  result.value += btn3.innerText;
});
btn4.addEventListener("click", function () {
  result.value += btn4.innerText;
});
btn5.addEventListener("click", function () {
  result.value += btn5.innerText;
});
btn6.addEventListener("click", function () {
  result.value += btn6.innerText;
});
btn7.addEventListener("click", function () {
  result.value += btn7.innerText;
});
btn8.addEventListener("click", function () {
  result.value += btn8.innerText;
});
btn9.addEventListener("click", function () {
  result.value += btn9.innerText;
});
btn0.addEventListener("click", function (event) {
  result.value += btn0.innerText;
});

//KEYPRESS EVENTS
document.addEventListener("keydown", function (keyboardEvent) {
    switch (keyboardEvent.key) {
        case "0":
            result.value += "0";            
            break;
        case "1":
            result.value += "1";            
            break;
        case "2":
            result.value += "2";            
            break;
        case "3":
            result.value += "3";            
            break;
        case "4":
            result.value += "4";            
            break;
        case "5":
            result.value += "5";            
            break;
        case "6":
            result.value += "6";            
            break;
        case "7":
            result.value += "7";            
            break;
        case "8":
            result.value += "8";            
            break;
        case "9":
            result.value += "9";            
            break;
        case "Backspace":
            result.value = result.value.slice(0, -1);
            break;
        case "Enter":
            result.value = eval(result.value);
            resultValues.push(result.value);
            break;
        case "%":
            result.value += "%";
            break;
        case "-":
            result.value += "-";
            break;
        case "/":
            result.value += "/";
            break;
        case "*":
            result.value += "*";
            break;
        case "+":
            result.value += "+";
            break;
        case "x":
        case "X":
        case "*":
            result.value += "x";
            break;
    }
});