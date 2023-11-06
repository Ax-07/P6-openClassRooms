import { createCard } from "../components/createWork.js";

const gallery = document.querySelector('.gallery');

const filterWorks = (works, selectedFilter) => {
    return selectedFilter === "Tous" ? works : works.filter(work => work.category.name === selectedFilter);
}
const createGalleryContent = (gallery, filteredWorks, isInModal) => {
    gallery.innerHTML = '';
    filteredWorks.forEach(work => {
        const card = createCard(work, isInModal);
        gallery.appendChild(card);
    });
}

export const createGallery = (works, selectedFilter) => {
    const updateGallery = () => {
        const filteredWorks = filterWorks(works, selectedFilter);
        createGalleryContent(gallery, filteredWorks, false);
    };
    updateGallery();

    return gallery;
};

export const createGalleryModal = (works, modalGallery) => {
    works.forEach(work => {
        const modalCard = createCard(work, true);
        modalGallery.appendChild(modalCard);
    });
};