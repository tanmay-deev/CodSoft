const display = document.getElementById("display");

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9.+\-*/]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;
    let currentNumber = "";
    let result = 0;
    let lastOperator = "+";

    for (let i = 0; i <= expression.length; i++) {
        let char = expression[i] || "=";

        if (!isNaN(char) || char === ".") {
            currentNumber += char;
        } else {
            if (currentNumber !== "") {
                let num = parseFloat(currentNumber);
                if (lastOperator === "+") result += num;
                else if (lastOperator === "-") result -= num;
                else if (lastOperator === "*") result *= num;
                else if (lastOperator === "/") result /= num;

                currentNumber = "";
            }
            lastOperator = char;
        }
    }

    display.value = result;
}

