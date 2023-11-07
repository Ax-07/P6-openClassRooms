import { createCard } from "../components/createWork.js";
import { All_data } from "../api/Works_API.js";

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

export const createGallery = async (selectedFilter) => {
    const datas = await All_data();
    const works = datas.worksData;
    // const works = store()?.works; console.log("works :", works);
    const updateGallery = () => {
        const filteredWorks = filterWorks(works, selectedFilter);
        createGalleryContent(gallery, filteredWorks, false);
    };
    updateGallery();

    return gallery;
};

export const createGalleryModal = (works, modalGallery) => {
    console.log("works :", works);
    works.forEach(work => {
        const modalCard = createCard(work, true);
        modalGallery.appendChild(modalCard);
    });
};