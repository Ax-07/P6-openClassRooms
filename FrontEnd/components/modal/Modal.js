import { createGalleryModal } from '../../containers/createGallery.js';
import { AddWorkFormUI } from './AddWorkForm.js';

const body = document.querySelector('body');
const modal_background = document.querySelector('.modal__background');
const modal = document.querySelector('.modal');
const modal_btn_back = document.querySelector('.modal__btn-back');
const modal_btn_close = document.querySelector('.modal__btn-close');
const modal_gallery = document.querySelector('.modal__gallery');
const modal_add_picture = document.querySelector('.modal__add-work');
const modal_title = document.querySelector('.modal__title');
const modal_btn_add = document.querySelector('.modal__btn');

export const modalEvent = {
    closeModal() {
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
        modal_btn_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn_add.setAttribute('style', 'display: block;');
    },
    addPicture() {
        modal_btn_back.setAttribute('style', 'display: flex;');
        modal_gallery.setAttribute('style', 'display: none;');
        modal_add_picture.setAttribute('style', 'display: flex;');
        modal_title.innerText = 'Ajout photo';
        modal_btn_add.setAttribute('style', 'display: none;');
    },
    backGallery() {
        modal_btn_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn_add.setAttribute('style', 'display: block;');
    }
}

export const Modal = (works, categories) => {
    modal_btn_back.addEventListener('click', () => {
        modalEvent.backGallery();
    });
    modal_btn_close.addEventListener('click', () => {
        modalEvent.closeModal();
    });
    modal_background.addEventListener('click', () => {
        modalEvent.closeModal();
    });
    modal_btn_add.addEventListener('click', () => {
        modalEvent.addPicture();
    });

    createGalleryModal(works, modal_gallery);

    const add_work = AddWorkFormUI(categories);

    modal_add_picture.appendChild(add_work);

    body.appendChild(modal_background);
    body.appendChild(modal);
}
