let currentInput = "";
let currentOperation = "";
let previousInput = "";


function newNumber(number) {
    console.log("Clicked ");
    currentInput = currentInput + number;
    document.getElementById("display").value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === "")
        return;
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = "";
   
    document.getElementById("display").value = `${previousInput} ${currentOperation} `;
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);


    switch (currentOperation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';

    document.getElementById("display").value = currentInput;


}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

