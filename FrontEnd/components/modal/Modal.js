// Dans le fichier Modal.js
import { ModalUI } from './ModalUI.js';
import { ModalEvent } from './ModalEvent.js';
import { Gallery_modal } from '../../containers/Gallery.js';
import { AddWorkFormUI } from './AddWorkForm.js';

export const Modal = (works, filter_categories) => {
    const body = document.querySelector('body');

    const {
        modal,
        modal_background,
        modal_back,
        modal_close,
        modal_gallery,
        modal_add_picture,
        modal_title,
        modal_btn
    } = ModalUI();

    ModalEvent(modal, modal_background,modal_back, modal_close, modal_gallery, modal_add_picture, modal_title, modal_btn);

    Gallery_modal(works, modal_gallery);
    const add_work = AddWorkFormUI(filter_categories);
    modal_add_picture.appendChild(add_work);

    body.appendChild(modal_background);
    body.appendChild(modal);
}
