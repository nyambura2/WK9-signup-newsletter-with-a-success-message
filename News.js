document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('emailbox');
    const errorMsg = document.getElementById('errormsg');
    const part1 = document.querySelector('.part1');
    const part2 = document.querySelector('.part2');

    // Function to validate email
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to show error message
    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
    }

    // Function to hide error message
    function hideError() {
        errorMsg.style.display = 'none';
    }

    // Function to show success message
    function showSuccess(email) {
        part1.style.display = 'none'; // Hide part 1
        part2.style.display = 'block'; // Show part 2
        part2.querySelector('.confirmation p').textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();

        // Validation
        if (email === '') {
            showError('Email address is required');
        } else if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
        } else {
            hideError();
            showSuccess(email);

            // Clear input field
            emailInput.value = '';
        }
    });
});













