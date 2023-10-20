export const Edit_modal = () => {
    const user = localStorage.getItem('token');
    if (!user) {
        return;
    }
    const edit_banner = document.querySelector('.edit__banner');
    edit_banner.setAttribute('style', 'display: flex;');

    const edit_btn = document.createElement('span');
    edit_btn.classList.add('edit__btn');
    edit_btn.innerText = 'Mode édition';



    edit_btn.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        const modal_background = document.querySelector('.modal__background');
        modal.setAttribute('style', 'display: flex;');
        modal_background.setAttribute('style', 'display: flex;');
    });

    edit_banner.appendChild(edit_btn);
}