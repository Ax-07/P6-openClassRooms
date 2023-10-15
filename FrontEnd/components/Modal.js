// Dans le fichier Modal.js
import { Gallery_modal } from '../containers/Gallery.js';
import { AddWorkForm } from './AddWorkForm.js';

export const Modal = (works) => {
    const body = document.querySelector('body');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';

    const modal_background = document.createElement('div');
    modal_background.classList.add('modal__background');

    const modal_close = document.createElement('button');
    modal_close.classList.add('modal__close');

    const modal_title = document.createElement('h2');
    modal_title.classList.add('modal__title');
    modal_title.innerText = 'Galerie photo';

    const modal_gallery = document.createElement('section');
    modal_gallery.classList.add('modal__gallery');

    const modal_add_picture = document.createElement('section');
    modal_add_picture.classList.add('modal__add-picture');
    
    const modal_line = document.createElement('span');
    modal_line.classList.add('modal__line');

    const modal_btn = document.createElement('button');
    modal_btn.classList.add('modal__btn');
    modal_btn.innerText = 'Ajouter une photo';

    modal_close.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        const modal_background = document.querySelector('.modal__background');
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
    });

    modal_background.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        const modal_background = document.querySelector('.modal__background');
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
    });

    modal_btn.addEventListener('click', (e) => {
        modal_gallery.setAttribute('style', 'display: none;');
        modal_add_picture.setAttribute('style', 'display: flex;');
        modal_title.innerText = 'Ajout photo';
    });

    Gallery_modal(works, modal_gallery);
    AddWorkForm(modal_add_picture);

    modal.appendChild(modal_close);
    modal.appendChild(modal_title);
    modal.appendChild(modal_gallery);
    modal.appendChild(modal_add_picture);
    modal.appendChild(modal_line);
    modal.appendChild(modal_btn);
    
    body.appendChild(modal_background);
    body.appendChild(modal);
}
