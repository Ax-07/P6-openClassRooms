export const ModalUI = () => {
    const modal = document.createElement('aside');
    modal.classList.add('modal');
    modal.id = 'modal';

    const modal_background = document.createElement('div');
    modal_background.classList.add('modal__background');

    const modal_back = document.createElement('span');
    modal_back.classList.add('modal__back');

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
    modal_btn.classList.add('modal__btn','btn-primary');
    modal_btn.innerText = 'Ajouter une photo';

    modal.appendChild(modal_back);
    modal.appendChild(modal_close);
    modal.appendChild(modal_title);
    modal.appendChild(modal_gallery);
    modal.appendChild(modal_add_picture);
    modal.appendChild(modal_line);
    modal.appendChild(modal_btn);

    return {
        modal,
        modal_background,
        modal_back,
        modal_close,
        modal_gallery,
        modal_add_picture,
        modal_title,
        modal_btn
    };
}