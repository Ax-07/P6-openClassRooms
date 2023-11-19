const login_url = "http://localhost:5678/api/users/login";

function removeUserToken() {
    localStorage.removeItem("token");
}
function redirectHome() {
    window.location.href = "../index.html";
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

        return response;

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
