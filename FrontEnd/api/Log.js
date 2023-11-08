const login_url = "http://localhost:5678/api/users/login";

const email_error = document.querySelector("#email_error");
const password_error = document.querySelector("#password_error");
const login_input_email = document.querySelector('#email');
const login_input_password = document.querySelector('#password');

const displayLoginError = {
    email : () => {
        login_input_email.classList.add('login__input--error');
        email_error.classList.add('login__error--display');
        email_error.textContent = "❌ Email incorrect";
    },
    password : () => {
        login_input_password.classList.add('login__input--error')
        password_error.classList.add('login__error--display');
    },
}
function setUserToken(token) {
    localStorage.setItem("token", token);
}
function removeUserToken() {
    localStorage.removeItem("token");
}
function redirectHome() {
    window.location.href = "http://localhost:5500";
}

// Fonction pour envoyer les données de connexion au serveur
export const login = async (formData) => {
    try {
        const response = await fetch(login_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            if (response.status === 404) {
                displayLoginError.email();
                return;
            } else if (response.status === 401) {
                displayLoginError.password();
                return;
            } else {
                console.error("Erreur inattendue : ", error);
            }
        }

        const data = await response.json();
        const token = data.token;

        if ( token ) {
            setUserToken(token);
            redirectHome();
        }
    } catch (error) {
        console.error("Erreur inattendue : ", error);
    }
};

export const logout = () => {
    try {
        removeUserToken();
        redirectHome();
        console.log("Déconnexion réussie !");
    } catch (error) {
        console.error("Erreur inattendue : ", error);
    }
};
