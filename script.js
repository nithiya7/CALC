let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "0";
}

function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    if (key >= "0" && key <= "9") { 
        appendToDisplay(key);
    } else if (key === ".") { 
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") { 
        appendToDisplay(key);
    } else if (key === "Enter") { 
        calculate();
    } else if (key === "Escape" || key === "c" || key === "C") { 
        clearDisplay();
    }
});
