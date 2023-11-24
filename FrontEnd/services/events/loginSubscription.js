// import { user } from "../store.js";
import { user } from "../../models/user.js";
import { userBus} from "../eventBus.js";
import { setLoggedStyles } from "../../utils/loggedStyles.js";
import { Edit_modal } from "../../components/Edit_modal.js";
import { Modal } from "../../components/ModalViewController.js";
import { displayLoginError } from "../../errors/loginErrors.js";
import { setLogoutLink } from "../../components/Navbar.js";

function redirectHome() {
    window.location.href = "../index.html";
}
export const loginSubscription = () => {
    userBus.subscribe("login", async (response) => {
        if (!response.ok) {
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
        }
    
        const data = await response.json();
    
        if (data) {
            userBus.emit("user:setData", data);

        }
    });
    userBus.subscribe("user:setData", (data) => {
        const { userId, token } = data;
        user.setUserId(userId);
        user.setToken(token);
        redirectHome();
        console.log('user:setToken:', token);
    });
    userBus.subscribe("logout", () => {
        user.removeToken();
        redirectHome();
        console.log("Déconnexion réussie !");
    });
    userBus.subscribe("isUserConnected", (isConnected) => {
        console.log('isUserConnected:', isConnected);

        if (isConnected) {
            setLoggedStyles();
            setLogoutLink();
            Edit_modal();
            Modal();
        } else {
            // createFilterElement();
        }
    });
};

