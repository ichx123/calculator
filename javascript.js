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