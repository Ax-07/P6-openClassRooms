import { login } from "../../api/Log.js";

const login_input_email = document.querySelector('#email');
const login_input_password = document.querySelector('#password');
const login_form = document.querySelector('#login_form');
const login_email_error = document.querySelector('#email_error');

// Fonction pour créer le formulaire de connexion
export const loginForm = () => {
    login_input_email.addEventListener('input', function () {
        const emailValue = login_input_email.value;
        const isValid = checkFormatEmail(emailValue);
        if (!isValid) {
            setErrorStyle.displayError();
        }
        else {
            setErrorStyle.hideError();
        }
    });
    login_form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!checkFormatEmail(login_input_email.value)) {
            return;
        }
        handleSubmit(e);
        console.log("Connexion");
    });
};

function checkFormatEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = emailRegex.test(email);
    
    return isValid;
};

function handleSubmit(e) {
    e.preventDefault();
    const emailValue = login_input_email.value; // sophie.bluel@test.tld
    const passwordValue = login_input_password.value; // S0phie
    const data = {
        email: emailValue,
        password: passwordValue
    };
    // Vérifiez à nouveau si tous les champs sont remplis
    if (emailValue && passwordValue) {
        login(data);
    }
};

const setErrorStyle = {
    displayError: () => {
        login_input_email.classList.add('login__input--error');
        login_email_error.classList.add('login__error--display');
    },
    hideError: () => {
        login_input_email.classList.remove('login__input--error');
        login_email_error.classList.remove('login__error--display');
    }
};
loginForm();