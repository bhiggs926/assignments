

var readlineSync = require ('readline-sync') ,

// num1 = readlineSync.question ('please enter first number ');
num1 = parseInt(readlineSync .question ('please enter first number ')) ;
console.log ( num1 ) ;

// num2 = readlineSync.question ('please enter second number ');
num2 = parseInt (readlineSync .question ('please enter second number ')) ;
console.log ( num2 )

list = ['add', 'subtract', 'multiply', 'divide '] ,
index = readlineSync .keyInSelect (list, 'which operator?') ;


// START OF FUNCTIONS

function addition (num1, num2) {
    console.log (num1 + num2)
}

function subtract (num1, num2) {
    console.log (num1 - num2)
}

function multiply (num1, num2) {
    console.log (num1 * num2)
}

function divide (num1, num2) {
    console.log (num1 / num2)
}

 if (list [index] === "add") {
    console.log (addition, num1 + num2)
} else if (list [index] === 'subtract') {
    console.log (subtract, num1 - num2)
} else if (list [index] === 'multiply') {
    console.log (multiply, num1 * num2)
} else if (list [index] === 'divide') {
    console.log (divide, num1 / num2)
}
