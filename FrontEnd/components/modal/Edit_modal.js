const edit_banner = document.querySelector('.edit__banner');
const edit_btn = document.querySelector('.edit__btn');
const modal = document.querySelector('.modal');
const modal_background = document.querySelector('.modal__background');

export const Edit_modal = () => {
    const user = localStorage.getItem('token');
    if (!user) {
        return;
    }
    edit_banner.setAttribute('style', 'display: flex;');

    edit_btn.addEventListener('click', () => {
        modal.setAttribute('style', 'display: flex;');
        modal_background.setAttribute('style', 'display: flex;');
    });

    edit_banner.appendChild(edit_btn);
}