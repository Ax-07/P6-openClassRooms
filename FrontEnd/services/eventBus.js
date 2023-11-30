export class EventBus {
    constructor() {
        this.events = {};  // Un objet pour stocker les différents types d'événements et leurs callbacks associés
    }

    subscribe(event, callback) {
        // La fonction subscribe permet à un composant ou module de s'abonner à un certain type d'événement
        // Si l'événement n'existe pas encore, on le crée comme une clé dans l'objet events
        if (!this.events[event]) {
            this.events[event] = [];
        }
        // On ajoute le callback à la liste des callbacks associés à cet événement
        this.events[event].push(callback);
    }

    emit(event, data) {
        console.log(`Event '${event}' emitted with data:`, data);
        // La fonction emit permet de déclencher un certain type d'événement et d'envoyer des données associées à cet événement
        if (this.events[event]) {
            // Si des callbacks sont enregistrés pour cet événement
            // On itère sur tous les callbacks et on les appelle avec les données fournies
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    }
}

// On crée une instance de EventBus et on l'exporte pour qu'elle puisse être utilisée dans d'autres fichiers
const userBus = new EventBus();
const worksBus = new EventBus();
const workFormBus = new EventBus();

export { userBus, worksBus, workFormBus };