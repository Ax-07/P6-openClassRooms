import { createCard } from "../components/createWork.js";
import { works } from "../api/store.js";

const gallery = document.querySelector('.gallery');
const modalGallery = document.querySelector('.modal__gallery');

const setFilteredWorks = (works, selectedFilter) => {
    return selectedFilter === "Tous" ? works : works.filter(work => work.category.name === selectedFilter);
}

const createGalleryContent = (gallery, filteredWorks, isInModal) => {
    gallery.innerHTML = '';
    filteredWorks.forEach(work => {
        const card = createCard(work, isInModal);
        gallery.appendChild(card);
    });
}

export const createGallery = async (selectedFilter) => {
    console.log("createGallery utiliser");
        const filteredWorks = setFilteredWorks(works, selectedFilter);
        createGalleryContent(gallery, filteredWorks, false);
    return gallery;
};

export const createGalleryModal = (works, modalGallery) => {
    works.forEach(work => {
        const modalCard = createCard(work, true);
        modalGallery.appendChild(modalCard);
    });
};

export const createGal = () => {
    gallery.innerHTML = '';
    modalGallery.innerHTML = '';
    console.log("createGal utiliser");
    console.log("works :", works);
    if (works) {
    works.forEach(work => {
        const card = createCard(work, false);
        const modalCard = createCard(work, true);

        gallery.appendChild(card);
        modalGallery.appendChild(modalCard);
    });
}
}

export const filteredGal = (selectedFilter) => {
    const filteredWorks = setFilteredWorks(works, selectedFilter);
    gallery.innerHTML = '';
    console.log("filteredGal utiliser");
    filteredWorks.forEach(work => {
        const card = createCard(work, false);
        gallery.appendChild(card);
    });
}