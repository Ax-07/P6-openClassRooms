import { workFormBus } from "../services/eventBus.js";
class Modal {
    constructor() {
        this.body = document.querySelector('body');
        this.modal_background = document.querySelector('.modal__background');
        this.modal = document.querySelector('.modal');
        this.modal_btn_back = document.querySelector('.modal__btn-back');
        this.modal_btn_close = document.querySelector('.modal__btn-close');
        this.modal_gallery = document.querySelector('.modal__gallery');
        this.modal_add_work = document.querySelector('.modal__add-work');
        this.modal_title = document.querySelector('.modal__title');
        this.modal_btn_addWork = document.querySelector('.modal__btn');
    }

    displayElement(element) {
        element.style.display = 'flex';
    }

    hideElement(element) {
        element.style.display = 'none';
    }

    openModal() {
        this.displayElement(this.modal);
        this.displayElement(this.modal_background);
    }

    closeModal() {
        this.hideElement(this.modal);
        this.hideElement(this.modal_background);
        this.hideElement(this.modal_btn_back);
        this.hideElement(this.modal_add_work);
        this.displayElement(this.modal_gallery);
        this.displayElement(this.modal_btn_addWork);
        this.modal_title.innerText = 'Galerie photo';
        workFormBus.emit('workForm:resetForm');
    }

    displayAddWorkForm() {
        this.displayElement(this.modal_btn_back);
        this.displayElement(this.modal_add_work);
        this.hideElement(this.modal_gallery);
        this.hideElement(this.modal_btn_addWork);
        this.modal_title.innerText = 'Ajout photo';
    }

    backGallery() {
        this.hideElement(this.modal_btn_back);
        this.displayElement(this.modal_gallery);
        this.hideElement(this.modal_add_work);
        this.displayElement(this.modal_btn_addWork);
        this.modal_title.innerText = 'Galerie photo';
    }

    init() {
        this.modal_btn_back.addEventListener('click', () => {
            this.backGallery();
        });
        this.modal_btn_close.addEventListener('click', () => {
            this.closeModal();
        });
        this.modal_background.addEventListener('click', () => {
            this.closeModal();
        });
        this.modal_btn_addWork.addEventListener('click', () => {
            this.displayAddWorkForm();
        });
    }
}

export const modal = new Modal();