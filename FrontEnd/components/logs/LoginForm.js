import { Login } from "../../api/Log.js";

// Fonction pour créer le formulaire de connexion
export const LoginForm = () => {
    const login = document.querySelector('#login');
    const login_input_email = document.querySelector('#email');
    const login_input_password = document.querySelector('#password');
    const login_form = document.querySelector('#login_form');
    const login_email_error = document.querySelector('#email_error');
    const login_password_error = document.querySelector('#password_error');

    login_input_email.addEventListener('input', function (e) {
        const emailValue = login_input_email.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!emailRegex.test(emailValue)) {
            login_email_error.style.display = 'block';
            login_email_error.innerText = '❌ Email incorrect';
            login_input_email.style.boxShadow = '0 0 4px 12px rgba(255,0,0,0.5)';
        } else {
            login_email_error.style.display = 'block';
            login_email_error.innerText = '✔️ Email correct';
            login_input_email.style.boxShadow = '2px 2px 2px rgba(0,255,0,0.5)';
        }
    });

    login_form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (login_input_email.value === '') {
            login_email_error.style.display = 'block';
        } else {
            login_email_error.style.display = 'none';
        }
        if (login_input_password.value === '') {
            login_password_error.style.display = 'block';
        } else {
            login_password_error.style.display = 'none';
        }

        Login();
        console.log("Connexion");
    });
    
    return login;
};
