import { user } from './services/store.js';
import { getAllData } from './services/api/worksApi.js';
import { setActiveLink } from './components/Navbar.js';
import { userBus, worksBus } from './services/eventBus.js';
import { loginSubscription } from './services/events/loginSubscription.js';
import { subscribeToWorkStore } from './services/events/workStoreSubscription.js';

loginSubscription();
subscribeToWorkStore();
setActiveLink();
userBus.emit("isUserConnected", user.isConnected);

const initApp = async () => {
    try {
        const data = await getAllData();
        worksBus.emit("loadWorks", data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'initialisation de l'application :", error);
    }
};

initApp();
