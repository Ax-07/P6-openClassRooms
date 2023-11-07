const edit_banner = document.querySelector('.edit__banner');
const edit_btn = document.querySelector('.edit__btn');
const modal = document.querySelector('.modal');
const modal_background = document.querySelector('.modal__background');

const displayEditBanner = () => {
    edit_banner.style.display = 'flex';
}
const openModal = () => {
    modal.style.display = 'flex';
    modal_background.style.display = 'flex';
}

export const Edit_modal = () => {
    const user = localStorage.getItem('token');
    if (!user) {
        return;
    }
    displayEditBanner();
    edit_btn.addEventListener('click', () => openModal());

    edit_banner.appendChild(edit_btn);
}