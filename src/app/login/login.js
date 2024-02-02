document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username should only contain letters
    const usernamePattern = /^[A-Za-z]+$/;

    // Password should contain a mixture of uppercase, lowercase, numbers, and symbols
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username.match(usernamePattern)) {
        showError("Username should contain only letters.");
    } else if (!password.match(passwordPattern)) {
        showError("Password must be at least 8 characters long and contain a mixture of uppercase, lowercase, numbers, and symbols.");
    } else {
        // Validation passed; you can submit the form or perform further actions here.
        // Remove this line if you want to allow form submission.
        showError("Form submitted successfully.");
    }
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = message;
}