document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    if (!sienaID || sienaID.trim() === "") {
        return "Siena ID field is empty.";
    }
    const regex = /^\d+$/;
    if (!regex.test(sienaID)) {
        return "Siena ID should contain only numbers.";
    }
    return "";
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());
    const sienaIDValidationMessage = validateSienaID(sienaIDInput.value.trim());


    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }

    if (sienaIDValidationMessage) {
        sienaIDError.textContent = sienaIDValidationMessage;
        isValid = false;
    }    // Do something similar for SienaID error handling.

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}