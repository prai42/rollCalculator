// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form and result div
    const form = document.getElementById('money-form');
    const resultDiv = document.getElementById('result');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Clear previous results or errors
        resultDiv.innerHTML = "";

        // Retrieve and parse input values
        const pennyRolls = parseInt(document.getElementById('pennyRolls').value) || 0;
        const nickelRolls = parseInt(document.getElementById('nickelRolls').value) || 0;
        const dimeRolls = parseInt(document.getElementById('dimeRolls').value) || 0;
        const quarterRolls = parseInt(document.getElementById('quarterRolls').value) || 0;
        const dollarBooks = parseInt(document.getElementById('dollarBooks').value) || 0;
        const fiveDollarBooks = parseInt(document.getElementById('fiveDollarBooks').value) || 0;

        // Input Validation: Ensure all inputs are non-negative integers
        const inputs = [pennyRolls, nickelRolls, dimeRolls, quarterRolls, dollarBooks, fiveDollarBooks];
        const invalidInputs = inputs.some(num => isNaN(num) || num < 0);

        if (invalidInputs) {
            resultDiv.innerHTML = `<p class="error">Please enter valid non-negative integers for all fields.</p>`;
            return;
        }

        // Calculate the total amount
        const total = (
            (pennyRolls * 0.5) +
            (nickelRolls * 2) +
            (dimeRolls * 5) +
            (quarterRolls * 10) +
            (dollarBooks * 20) +
            (fiveDollarBooks * 100)
        );

        // Format the total to two decimal places with comma separators
        const formattedTotal = total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Display the result
        resultDiv.innerHTML = `<p>The total amount is: <strong>$${formattedTotal}</strong></p>`;
    });
});
