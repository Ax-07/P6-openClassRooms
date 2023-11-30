import { user } from "../../models/user.js";
import { storeWorks } from "../../models/workStore.js";
import { userBus } from "../eventBus.js";
import { setLoggedStyles } from "../../utils/loggedStyles.js";
import { EditBanner } from "../../components/EditBanner.js";
import { Modal } from "../../components/ModalViewController.js";
import { displayLoginError } from "../../errors/loginErrors.js";
import { setLogoutLink } from "../../components/Navbar.js";
import { filter } from "../../components/Filter.js";
import { customSelect } from "../../components/CustomSelect.js";
import { addPicture } from "../../components/AddPicture.js";
import { workForm } from "../../components/WorkForm.js";

function redirectHome() {
    window.location.href = "../index.html";
};

async function onLoginSuccess(response) {
    try {
        const data = await response.json();
        userBus.emit("user:setData", data);
    }
    catch (error) {
        console.error("Erreur lors de la connexion :", error);
    }
};

function onLoginError(response) {
    switch (response.status) {
        case 404:
            displayLoginError.email();
            break;
        case 401:
            displayLoginError.password();
            break;
        default:
            console.error("Erreur inattendue");
    }
    return;
};

export const userBus_Subscription = () => {

    userBus.subscribe("login", async (response) => {
        if (!response.ok) {
            onLoginError(response);
            return;
        }
        onLoginSuccess(response);
    });

    userBus.subscribe("user:setData", (data) => {
        const { userId, token } = data;
        user.setUserId(userId);
        user.setToken(token);
        redirectHome();
        console.log('user:setToken:', token);
    });

    userBus.subscribe("isUserConnected", (isConnected) => {
        console.log('isUserConnected:', isConnected);

        if (isConnected) {
            setLoggedStyles();
            setLogoutLink();
            addPicture.init();
            customSelect.init(storeWorks.categories);
            workForm.init();
            const editBanner = new EditBanner();
            editBanner.display();
            Modal();
        } else {
            filter.setCategories(storeWorks.categories);
        }
    });

    userBus.subscribe("logout", () => {
        user.removeToken();
        redirectHome();
        console.log("Déconnexion réussie !");
    });
};
