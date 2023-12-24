import { loginError } from "../errors/loginErrors.js";
import { login } from "../services/api/logsApi.js";
import { userBus } from "../services/eventBus.js";
import { userBus_Subscription } from "../services/events/userBus.js";

class LoginForm {
    constructor() {
        this.login_input_email = document.querySelector('#email');
        this.login_input_password = document.querySelector('#password');
        this.login_form = document.querySelector('#login_form');
    }

    init() {
        userBus_Subscription();
        this.login_input_email.addEventListener('input', this.checkEmailFormat.bind(this));
        this.login_form.addEventListener('submit', this.onSubmit.bind(this));
    }

    checkEmailFormat({target: {value: email}}) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = emailRegex.test(email);

        if (!isValid) {
            loginError.invalidEmail();
        }
        else {
            loginError.hideError();
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        const emailValue = this.login_input_email.value;
        const passwordValue = this.login_input_password.value;

        if (!emailValue || !passwordValue) {
            return;
        }

        const data = {
            email: emailValue,
            password: passwordValue
        };

        userBus.emit("loginForm:login", data);

    }
}
const loginForm = new LoginForm();
loginForm.init();