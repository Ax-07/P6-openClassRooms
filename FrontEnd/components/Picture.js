export const createPicture = (src, titre, isInModal) => {
    const user = localStorage.getItem('token');

    const figure = document.createElement('figure');
    figure.classList.add('gallery__figure');
    const img = document.createElement('img');
    img.src = src;
    img.alt = titre;
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = titre;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    if (isInModal && user) {
        const delete_btn = document.createElement('span');
        delete_btn.classList.add('delete__btn');
        figure.appendChild(delete_btn);
    }
    return figure;
};