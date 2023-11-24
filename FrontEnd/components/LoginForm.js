import { displayLoginError, loginError } from "../errors/loginErrors.js";
import { login } from "../services/api/logsApi.js";
import { userBus } from "../services/eventBus.js";
import { loginSubscription } from "../services/events/loginSubscription.js";

const login_input_email = document.querySelector('#email');
const login_input_password = document.querySelector('#password');
const login_form = document.querySelector('#login_form');

loginSubscription();

const loginForm = () => {
    login_input_email.addEventListener('input', checkEmailFormat);
    login_form.addEventListener('submit', onSubmit);
};

function checkEmailFormat({target: {value: email}}) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = emailRegex.test(email);

    if (!isValid) {
        loginError.invalidEmail();
    }
    else {
        loginError.hideError();
    }
};

async function onSubmit(e) {
    e.preventDefault();
    const emailValue = login_input_email.value; // sophie.bluel@test.tld
    const passwordValue = login_input_password.value; // S0phie

    // Vérifie à nouveau si tous les champs sont remplis
    if (!emailValue || !passwordValue) {
        return;
    }

    const data = {
        email: emailValue,
        password: passwordValue
    };

    try {
        const response = await login(data);
        userBus.emit("login", response);
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
    }
}

loginForm();