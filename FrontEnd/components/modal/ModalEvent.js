export const ModalEvent = (modal, modal_background, modal_back, modal_close, modal_gallery, modal_add_picture, modal_title, modal_btn) => {

    modal_close.addEventListener('click', (e) => {
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
        modal_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn.setAttribute('style', 'display: flex;');
    });
    modal_background.addEventListener('click', (e) => {
        modal.setAttribute('style', 'display: none;');
        modal_background.setAttribute('style', 'display: none;');
        modal_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn.setAttribute('style', 'display: block;');
    });
    modal_btn.addEventListener('click', (e) => {
        modal_back.setAttribute('style', 'display: flex;');
        modal_gallery.setAttribute('style', 'display: none;');
        modal_add_picture.setAttribute('style', 'display: flex;');
        modal_title.innerText = 'Ajout photo';
        modal_btn.setAttribute('style', 'display: none;');
    });
    modal_back.addEventListener('click', (e) => {
        modal_back.setAttribute('style', 'display: none;');
        modal_gallery.setAttribute('style', 'display: flex;');
        modal_add_picture.setAttribute('style', 'display: none;');
        modal_title.innerText = 'Galerie photo';
        modal_btn.setAttribute('style', 'display: block;');
    });
}