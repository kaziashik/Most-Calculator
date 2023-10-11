console.log("main.js is connected.");

function calculate() {
    // Get selected values from radio buttons
    const aValue = parseFloat(document.querySelector('input[name="s1"]:checked').value);
    const bValue = parseFloat(document.querySelector('input[name="s2"]:checked').value);
    const gValue = parseFloat(document.querySelector('input[name="s3"]:checked').value);

    // Perform your calculation based on selected values
    const result = aValue + bValue + gValue; // This is just an example calculation
    console.log("checkvalo",result)

    // Display the result or update the DOM as needed
    alert(`Result: ${result}`);
}
