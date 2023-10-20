import { Login } from "../../api/Log.js";

// Fonction pour créer le formulaire de connexion
export const LoginForm = () => {
    const login = document.querySelector('#login');
// #region titre
    const login_title = document.createElement('h2');
    login_title.classList.add('login__title');
    login_title.innerText = 'Login';
    //#endregion titre
// #region form
    const login_form = document.createElement('form');
    login_form.id = 'login_form';
    login_form.classList.add('login__form');
// #endregion form
// #region label email
    const login_label_email = document.createElement('label');
    login_label_email.htmlFor = 'email';
    login_label_email.classList.add('login__label');
    login_label_email.innerText = 'E-mail';
// #endregion label email
// #region input email
    const login_input_email = document.createElement('input');
    login_input_email.type = 'email';
    login_input_email.name = 'email';
    login_input_email.id = 'email';
    login_input_email.classList.add('login__input');
// #endregion input email
//#region email error
    const login_email_error = document.createElement('p');
    login_email_error.classList.add('login__error');
    login_email_error.innerText = '❌ Email incorrect';
    login_email_error.style.display = 'none';
// #endregion email error
// #region label password
    const login_label_password = document.createElement('label');
    login_label_password.htmlFor = 'password';
    login_label_password.classList.add('login__label');
    login_label_password.innerText = 'Mot de passe';
// #endregion label password
// #region input password
    const login_input_password = document.createElement('input');
    login_input_password.type = 'password';
    login_input_password.name = 'password';
    login_input_password.id = 'password';
    login_input_password.classList.add('login__input');
// #endregion input password
// #region password error
    const login_password_error = document.createElement('p');
    login_password_error.classList.add('login__error');
    login_password_error.innerText = 'Mot de passe incorrect';
    login_password_error.style.display = 'none';
// #endregion password error
// #region submit button
    const login_submit_button = document.createElement('input');
    login_submit_button.type = 'submit';
    login_submit_button.value = 'Se connecter';
    login_submit_button.classList.add('login__btn');
// #endregion submit button
// #region forgot password link
    const login_forgot_password_link = document.createElement('a');
    login_forgot_password_link.href = '#'; // Remplacez '#' par l'URL de la page de récupération du mot de passe
    login_forgot_password_link.classList.add('login__link');
    login_forgot_password_link.innerText = 'Mot de passe oublié ?';
// #endregion forgot password link


    login_form.appendChild(login_label_email);
    login_form.appendChild(login_input_email);
    login_form.appendChild(login_email_error);
    login_form.appendChild(login_label_password);
    login_form.appendChild(login_input_password);
    login_form.appendChild(login_password_error);
    login_form.appendChild(login_submit_button);
    
    login.appendChild(login_title);
    login.appendChild(login_form);
    login.appendChild(login_forgot_password_link);

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
