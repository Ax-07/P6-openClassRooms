import { addWorkForm } from './AddWorkForm.js';

const body = document.querySelector('body');
const modal_background = document.querySelector('.modal__background');
const modal = document.querySelector('.modal');
const modal_btn_back = document.querySelector('.modal__btn-back');
const modal_btn_close = document.querySelector('.modal__btn-close');
const modal_gallery = document.querySelector('.modal__gallery');
const modal_add_work = document.querySelector('.modal__add-work');
const modal_title = document.querySelector('.modal__title');
const modal_btn_addWork = document.querySelector('.modal__btn');

export const modalEvent = {
    openModal() {
        modal.style.display = 'flex';
        modal_background.style.display = 'flex';
    },
    closeModal() {
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
        modal_btn_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_work.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn_addWork.setAttribute('style', 'display: block;');
    },
    displayAddWorkForm() {
        modal_btn_back.setAttribute('style', 'display: flex;');
        modal_gallery.setAttribute('style', 'display: none;');
        modal_add_work.setAttribute('style', 'display: flex;');
        modal_title.innerText = 'Ajout photo';
        modal_btn_addWork.setAttribute('style', 'display: none;');
    },
    backGallery() {
        modal_btn_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_work.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn_addWork.setAttribute('style', 'display: block;');
    }
}

export const Modal = () => {
    modal_btn_back.addEventListener('click', () => {
        modalEvent.backGallery();
    });
    modal_btn_close.addEventListener('click', () => {
        modalEvent.closeModal();
    });
    modal_background.addEventListener('click', () => {
        modalEvent.closeModal();
    });
    modal_btn_addWork.addEventListener('click', () => {
        modalEvent.displayAddWorkForm();
    });

    const add_work = addWorkForm();

    modal_add_work.appendChild(add_work);

    body.appendChild(modal_background);
    body.appendChild(modal);
}
