import { user } from "../../models/user.js";
import { storeWorks } from "../../models/workStore.js";
import { userBus } from "../eventBus.js";
import { setLoggedStyles } from "../../utils/loggedStyles.js";
import { EditBanner } from "../../components/EditBanner.js";
import { modal } from "../../components/Modal.js";
import { displayLoginError } from "../../errors/loginErrors.js";
import { setLogoutLink } from "../../components/Navbar.js";
import { filter } from "../../components/Filter.js";
import { customSelect } from "../../components/CustomSelect.js";
import { addPicture } from "../../components/AddPicture.js";
import { workForm } from "../../components/WorkForm.js";
import { login } from "../api/logsApi.js";
import { notification } from "../../components/Notification.js";

const redirectHome = () => {
    window.location.href = "../index.html";
};

const onLoginSuccess = async (response) => {
    try {
        const data = await response.json();
        userBus.emit("user:setData", data);
        userBus.emit("loginForm:login-notification", { isSuccess: true});
    }
    catch (error) {
        console.error("Erreur lors de la connexion :", error);
    }
};

const onLoginError = (response) => {
    userBus.emit("loginForm:login-notification", { isSuccess: false});
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

    userBus.subscribe("loginForm:login", async (data) => {
        try {
            const response = await login(data);
            if (!response.ok) {
                onLoginError(response);
                return;
            }
            onLoginSuccess(response);
        }
        catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    });

    userBus.subscribe("user:setData", (data) => {
        const { userId, token } = data;
        user.setUserId(userId);
        user.setToken(token);
        setTimeout(() => {
            redirectHome();
        }, 600);
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
            modal.init();
        } else {
            filter.display();
            filter.setCategories(storeWorks.categories);
        }
    });

    userBus.subscribe("loginForm:login-notification", (response) => {
        if (response.isSuccess) {
            notification.displayLoginNotifications(response);
            console.log("Connexion réussie !");
        } else {
            notification.displayLoginNotifications(response);
            console.error("Échec de la connexion");
        }
    });

    userBus.subscribe("loginForm:logout-notification", (response) => {
        const isSuccess = response.isSuccess;
        if (isSuccess) {
            console.log('response', isSuccess);
            notification.displayLogoutNotifications(isSuccess);
            console.log("Déconnexion réussie !");
        } else {
            notification.displayLogoutNotifications(isSuccess);
            console.error("Échec de la déconnexion");
        }
    });

    userBus.subscribe("logout", () => {
        userBus.emit("loginForm:logout-notification", { isSuccess: true });
        user.removeToken();
        setTimeout(() => {
            window.location.href = "./";
        }, 600);
        console.log("Déconnexion réussie !");
    });
};
