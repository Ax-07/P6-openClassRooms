import { createCard } from "./createWork.js";
import { works } from "../services/store.js";

const gallery = document.querySelector('.gallery');
const modalGallery = document.querySelector('.modal__gallery');

const setFilteredWorks = (works, selectedFilter) => {
    return selectedFilter === "Tous" ? works : works.filter(work => work.category.name === selectedFilter);
}

export const createGallery = () => {
    gallery.innerHTML = '';
    modalGallery.innerHTML = '';

    if (works) {
        works.forEach(work => {
            const card = createCard(work, false);
            const modalCard = createCard(work, true);

            gallery.appendChild(card);
            modalGallery.appendChild(modalCard);
        });
    }
}

export const filteredGallery = (selectedFilter) => {
    const filteredWorks = setFilteredWorks(works, selectedFilter);
    gallery.innerHTML = '';

    filteredWorks.forEach(work => {
        const card = createCard(work, false);
        gallery.appendChild(card);
    });
}