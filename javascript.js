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
 let num1;
 let num2;
 let operator;

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