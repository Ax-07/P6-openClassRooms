import { Delete_data } from "../api/Works_API.js";

export const createPicture = (work, isInModal) => {
    const user = localStorage.getItem('token');

    const figure = document.createElement('figure');
    figure.classList.add('gallery__figure');
    const img = document.createElement('img');
    img.src = work.imageUrl;
    img.alt = work.title;
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = work.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    if (isInModal && user) {
        const delete_btn = document.createElement('span');
        delete_btn.classList.add('delete__btn');

        delete_btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("delete btn :", work.id);
            Delete_data(work.id);
        });
        figure.appendChild(delete_btn);
    }
    return figure;
};