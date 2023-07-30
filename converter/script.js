document.getElementById('convertBtn').addEventListener('click', function () {
    // Get input values
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    // Check if either Celsius or Fahrenheit input is empty
    if (isNaN(celsiusValue) && isNaN(fahrenheitValue)) {
        alert('Please enter a valid temperature value.');
    } else if (!isNaN(celsiusValue) && !isNaN(fahrenheitValue)) {
        alert('Please enter only one temperature value.');
    } else if (!isNaN(celsiusValue)) {
        // Convert Celsius to Fahrenheit
        const fahrenheitResult = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitResult.toFixed(2);
    } else {
        // Convert Fahrenheit to Celsius
        const celsiusResult = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusResult.toFixed(2);
    }
});
