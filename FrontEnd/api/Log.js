// Fonction pour envoyer les données de connexion au serveur
export const Login = () => {
    const login_url = "http://localhost:5678/api/users/login";
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const formData = {
        email: email, // sophie.bluel@test.tld
        password: password // S0phie
    };

    fetch(login_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error("Échec de la connexion");
        }
    })
    .then((data) => {
        const token = data.token;
        console.log("token: ",token);
        console.log("Connexion réussie !");
        localStorage.setItem("token", token);
        window.location.href = "http://localhost:5500/FrontEnd";
    })
    .catch((error) => {
        console.error("Erreur inattendue : " + error);
    });
};

