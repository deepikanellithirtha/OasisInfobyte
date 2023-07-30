let currentDisplay = '0';

function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (currentDisplay === '0' || currentDisplay === 'Error') {
        currentDisplay = number;
    } else {
        currentDisplay += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentDisplay !== 'Error') {
        currentDisplay += ' ' + operator + ' ';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
    } catch (error) {
        currentDisplay = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentDisplay;
}
