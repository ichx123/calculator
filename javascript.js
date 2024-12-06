// Calculator-Functions (add, multiply, substract, divide)

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("Error, you can't divide through 0");
        return "Error";
    } else {
        return num1/num2;
    }
}

 //Basic variables for using the calculator
 let num1 = null;
 let num2 = null;
 let operator = null;
 let displayValue = "";

//Function to operate the cakculator with the given input
function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1,num2);
        case "-": 
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.log("Error, you used no valid operator.")
    }

}

//Function to update the Display-Values
function updateUI() {
    const display = document.querySelector(".result");
    if (displayValue === "") {
        display.textContent = "0";
    } else {
    display.textContent = displayValue; 
    }
}

//EventListener for Buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(number => {
    number.addEventListener("click", addNumberToDisplay);
})

function addNumberToDisplay() {
    const selectedNumber = this.value;
    displayValue += selectedNumber;
    updateUI();
}

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operator => {
    operator.addEventListener("click", addOperator);
})

function addOperator() {
    const selectedOperator = this.value;
    if (num1 === null) {
        num1 = Number(displayValue);
        operator = selectedOperator; 
    } else {
        num2 = Number(displayValue);
        num1 = operate(num1, num2, operator);
        operator = selectedOperator;
        num2 = null;
    }
    displayValue = "";
    updateUI();
}

const resultButton = document.querySelector("#result");
resultButton.addEventListener("click", getResult);

function getResult() {
    num2 = Number(displayValue);
    displayValue = operate(num1, num2, operator);
    updateUI();
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearCalcuator);

function clearCalcuator() {
    num1 = null;
    num2 = null;
    operator = null;
    displayValue = "";
    updateUI();
}