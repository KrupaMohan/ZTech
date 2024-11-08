function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mobile = document.getElementById('mobile');
    const terms = document.getElementById('terms').checked;
    const registerBtn = document.getElementById('registerBtn');

    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('mobileError').innerText = '';
    document.getElementById('termsError').innerText = '';

    let valid = true;

    if (!firstName.validity.valid) {
        document.getElementById('firstNameError').innerText = 'First name must be at least 3 alphabetic characters.';
        valid = false;
        firstName.classList.add('invalid');
    } else {
        firstName.classList.add('valid');
        firstName.classList.remove('invalid');
    }

    if (!lastName.validity.valid) {
        document.getElementById('lastNameError').innerText = 'Last name must only contain alphabetic characters.';
        valid = false;
        lastName.classList.add('invalid');
    } else {
        lastName.classList.add('valid');
        lastName.classList.remove('invalid');
    }

    if (!email.validity.valid) {
        document.getElementById('emailError').innerText = 'Email must be in the format example@gmail.com.';
        valid = false;
        email.classList.add('invalid');
    } else {
        email.classList.add('valid');
        email.classList.remove('invalid');
    }

    if (!password.validity.valid) {
        document.getElementById('passwordError').innerText = 'Password must be at least 10 characters and contain at least one letter, one number, and one special character.';
        valid = false;
        password.classList.add('invalid');
    } else {
        password.classList.add('valid');
        password.classList.remove('invalid');
    }

    if (!mobile.validity.valid) {
        document.getElementById('mobileError').innerText = 'Mobile number must be exactly 10 digits.';
        valid = false;
        mobile.classList.add('invalid');
    } else {
        mobile.classList.add('valid');
        mobile.classList.remove('invalid');
    }

    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions.';
        valid = false;
    }

    if (valid) {
        registerBtn.disabled = false;
        registerBtn.classList.add('enabled');
    } else {
        registerBtn.disabled = true;
        registerBtn.classList.remove('enabled');
    }
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration successful!');
    window.location.href = 'login.html'; 
});
