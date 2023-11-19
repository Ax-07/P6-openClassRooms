import { initStore, user } from './services/store.js';
import { getAllData } from './services/api/worksApi.js';
import { createGallery } from './components/createGallery.js';
import { createFilterElement } from './components/Filter.js';
import { Edit_modal } from './components/Edit_modal.js';
import { Modal } from "./components/ModalViewController.js";
import { Navbar } from './components/Navbar.js';
import { setLoggedStyles } from './utils/loggedStyles.js';

const initApp = () => {
    console.log("Initialisation de l'application...");
    getAllData().then((data) => {
        initStore(data)
            .then((success) => {
                if (success) {
                    createGallery();
                    Navbar(user.isConnected);

                    if (user.isConnected) {
                        setLoggedStyles();
                        Edit_modal();
                        Modal();
                    }
                    else {
                        createFilterElement();
                    }
                } else {
                    console.error("Erreur lors de l'initialisation du store.");
                }
            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de l'initialisation de l'application :", error);
            });
    })
}

initApp();