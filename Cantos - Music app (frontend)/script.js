// const container = document.getElementById('container');

// const registerBtn = document.getElementById('register');

// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click',() =>{
//     container.classList.add("active");
// }
// );

// loginBtn.addEventListener('click',() =>{
//     container.classList.remove("active");
// }
// );


const container = document.getElementById('container');
const signupToggle = document.getElementById('signup-toggle');
const signinToggle = document.getElementById('signin-toggle');
const signupForm = document.querySelector('.sign-up form');
const loginForm = document.querySelector('.sign-in form');

// Initialize registeredUsers array from localStorage or set it to an empty array
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

signupToggle.addEventListener('click', () => {
    container.classList.add("active");
});

signinToggle.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to save registered users data to localStorage
function saveRegisteredUsers() {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}

// Function to register a new user
function registerUser(username, email, password) {
    // Check if the email or username is already registered
    const existingEmail = registeredUsers.find(user => user.email === email);
    const existingUsername = registeredUsers.find(user => user.username === username);
    if (existingEmail || existingUsername) {
        alert('Email or username already registered.');
        return;
    }

    // Register the new user
    registeredUsers.push({ username, email, password });
    saveRegisteredUsers(); // Save registered users data
    alert('Registration successful! Please login with your credentials.');
}

// Function to validate sign up form
function validateSignUpForm() {
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Register the user
    registerUser(username, email, password);

    return true;
}

// Function to validate login form
function validateLoginForm() {
    const loginIdentifier = document.getElementById('login-identifier').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Find the user with the provided email or username
    const user = registeredUsers.find(user => user.email === loginIdentifier || user.username === loginIdentifier);

    if (!user || user.password !== password) {
        alert('Invalid email/username or password. Sign Up first');
        return false;
    }

    // Login successful
    alert('Login successful! Welcome, ' + user.username + '!');
    // Redirect to music.html
    window.location.href = 'music.html';
    return true;
}

// Event listener for sign up form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateSignUpForm()) {
        // Clear sign up form fields after successful registration
        this.reset();
    }
});

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    validateLoginForm();
});




