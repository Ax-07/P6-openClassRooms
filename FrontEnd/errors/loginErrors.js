const error_message = document.querySelector("#login_error");
const email_error = document.querySelector("#email_error");
const password_error = document.querySelector("#password_error");
const login_input_email = document.querySelector('#email');
const login_input_password = document.querySelector('#password');

// login errors
export const loginError = {
    invalidEmail: () => {
        login_input_email.classList.add('login__input-email--error');
        email_error.classList.add('login__error--display');
    },
    hideError: () => {
        login_input_email.classList.remove('login__input-email--error');
        email_error.classList.remove('login__error--display');
    }
};

export const displayLoginError = {
    email : () => {
        login_input_email.classList.add('login__input--error');
        email_error.classList.add('login__error--display');
        email_error.textContent = "❌ Email incorrect";
        console.log('displayLoginError.email');
    },
    password : () => {
        login_input_password.classList.add('login__input--error');
        password_error.classList.add('login__error--display');
    },
};