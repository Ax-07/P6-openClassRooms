import { user } from './models/user.js';
import { getAllData } from './services/api/worksApi.js';
import { setActiveNavLink } from './components/Navbar.js';
import { userBus, worksBus } from './services/eventBus.js';
import { userBus_Subscription } from './services/events/userBus.js';
import { workBus_Subscription } from './services/events/workBus.js';
import { workFormBus_Subscription } from './services/events/workFormBus.js';

class Application {
    constructor() {
        userBus_Subscription();
        workBus_Subscription();
        workFormBus_Subscription();
        setActiveNavLink();
    }
    
    async init() {
        try {
            const data = await getAllData();
            worksBus.emit("loadWorks", data);
            userBus.emit("isUserConnected", user.isConnected);
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'initialisation de l'application :", error);
        }
    }
}

const app = new Application();
app.init();
