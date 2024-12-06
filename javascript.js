// Calculator-Functions (add, multiply, substract, divide)

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "Error, don't divide by 0!";
    } else {
        return num1 / num2;
    }
}

//Basic variables for using the calculator
let num1 = null;
let num2 = null;
let operator = null;
let displayValue = "";

//Function to operate the cakculator with the given input
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
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
        displayValue = "";
    } else if (operator === null) {
        operator = selectedOperator;
        displayValue = "";
    } else {
        num2 = Number(displayValue);
        num1 = operate(num1, num2, operator);
        displayValue = num1;
        updateUI();
        operator = selectedOperator;
        num2 = null;
        displayValue = "";
    }
}

const resultButton = document.querySelector("#result");
resultButton.addEventListener("click", getResult);

function getResult() {
    if (operator === null) {
        //displayValue = ""; //Wenn noch kein Operator eingegeben wurde, aber mehrmals auf "=" geklickt wird, soll kein Ergebnis angezeigt werden
    } else {
        num2 = Number(displayValue);
        displayValue = operate(num1, num2, operator);
        num1 = Number(displayValue);
        num2 = null;
        operator = null;
        updateUI();
    }
    
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