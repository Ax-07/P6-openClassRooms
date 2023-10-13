export const createPicture = (src, titre) => {
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




