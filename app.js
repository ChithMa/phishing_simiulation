document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');

    // Remove error styling on input
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.input-group');
            group.classList.remove('error');
            group.querySelector('.error-msg').textContent = '';
        });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        let hasError = false;

        if (!username) {
            showError(usernameInput, 'Please enter your User ID or Email');
            hasError = true;
        }

        if (!password) {
            showError(passwordInput, 'Please enter your password');
            hasError = true;
        }

        if (hasError) return;

        // Simulate login process
        setLoadingState(true);

        setTimeout(() => {
            // Fake successful login feedback
            setLoadingState(false);
            
            // Add a success animation to the card
            const card = document.querySelector('.login-card');
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0';
            card.style.transition = 'all 0.4s ease';

            // Reset form for demo purposes
            setTimeout(() => {
                loginForm.reset();
                card.style.transform = 'translateY(0) scale(1)';
                card.style.opacity = '1';
                // Show a fake success message
                btnText.textContent = "Success! Redirecting...";
                submitBtn.style.background = "linear-gradient(135deg, #2ea043, #3fb950)";
                
                setTimeout(() => {
                    btnText.textContent = "Sign In";
                    submitBtn.style.background = "";
                }, 2000);
            }, 600);

        }, 1500); // 1.5s delay to show loading animation
    });

    function showError(inputElement, message) {
        const group = inputElement.closest('.input-group');
        group.classList.add('error');
        group.querySelector('.error-msg').textContent = message;
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.classList.add('loading');
            btnText.style.display = 'none';
            spinner.style.display = 'block';
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('loading');
            btnText.style.display = 'block';
            spinner.style.display = 'none';
            submitBtn.disabled = false;
        }
    }
});
