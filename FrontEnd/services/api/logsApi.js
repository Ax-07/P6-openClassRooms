import { userBus } from "../eventBus.js";

const login_url = "http://localhost:5678/api/users/login";

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
        userBus.emit("logout");
    } catch (error) {
        console.error("Erreur inattendue : ", error);
    }
};