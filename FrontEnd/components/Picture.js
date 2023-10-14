export const createPicture = (src, titre) => {
    const user = localStorage.getItem('token');
    if (user) {
        const delete_btn = document.createElement('span');
        delete_btn.classList.add('delete__btn');
    }

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = src;
    img.alt = titre;
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = titre;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
};




