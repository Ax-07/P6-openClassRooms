class Notification {
    constructor() {
        this.modal = null;
    }

    workNotificationsText = {
        add: {
            success: "Votre oeuvre a bien été ajoutée",
            error: "Votre oeuvre n'a pas pu être ajoutée"
        },
        delete: {
            success: "Votre oeuvre a bien été supprimée",
            error: "Votre oeuvre n'a pas pu être supprimée"
        },
    }

    logNotifications = {
        login: {
            success: "Vous êtes connecté",
            error: "L'adresse email ou le mot de passe est incorrect"
        },
        logout: {
            success: "Vous êtes déconnecté",
            error: "Une erreur est survenue lors de la déconnexion"
        },
    }

    createNotificationModalElement(notificationText) {
        this.modal = document.createElement('div');
        this.modal.classList.add('notification-modal');
        this.modal.classList.add('notification-modal--display');
        const modalText = document.createElement('p');
        modalText.classList.add('notification-modal__text');
        this.modal.textContent = notificationText;
        this.modal.appendChild(modalText);

        document.body.appendChild(this.modal);

        setTimeout(() => {
            this.modal.remove();
        }, 600);
    }

    displayAddWorkNotifications(isSuccess) {
        if (isSuccess) {
            this.createNotificationModalElement(this.workNotificationsText.add.success);
        } else {
            this.createNotificationModalElement(this.workNotificationsText.add.error);
        }
    }

    displayDeleteWorkNotifications(isSuccess) {
        if (isSuccess) {
            this.createNotificationModalElement(this.workNotificationsText.delete.success);
        } else {
            this.createNotificationModalElement(this.workNotificationsText.delete.error);
        }
    }

    displayLoginNotifications(isSuccess) {
        if (isSuccess) {
            this.createNotificationModalElement(this.logNotifications.login.success);
        } else {
            this.createNotificationModalElement(this.logNotifications.login.error);
        }
    }

    displayLogoutNotifications(isSuccess) {
        if (isSuccess) {
            this.createNotificationModalElement(this.logNotifications.logout.success);
        } else {
            this.createNotificationModalElement(this.logNotifications.logout.error);
        }
    }

    hideModal() {
        setTimeout(() => {
            this.modal.remove();
        }, 2000);
    }
}

export const notification = new Notification();