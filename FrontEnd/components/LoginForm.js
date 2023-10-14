import { Login } from "../api/Log.js";

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
    login_label_email.innerText = 'Email';
// #endregion label email
// #region input email
    const login_input_email = document.createElement('input');
    login_input_email.type = 'email';
    login_input_email.name = 'email';
    login_input_email.id = 'email';
    login_input_email.classList.add('login__input');
// #endregion input email
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
    login_form.appendChild(login_label_password);
    login_form.appendChild(login_input_password);
    login_form.appendChild(login_submit_button);
    

    login_form.addEventListener('submit', (e) => {
        e.preventDefault();
        Login();
        console.log("Connexion tenter !");
    });
    
    login.appendChild(login_title);
    login.appendChild(login_form);
    login.appendChild(login_forgot_password_link);

    return login;
};
LoginForm();
