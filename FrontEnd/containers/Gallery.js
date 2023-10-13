import { createPicture } from "../components/Picture.js";

export const Gallery = (works, selectedFilter) => {
    const gallery = document.querySelector('.gallery');
    
    const updateGallery = () => {
        // Filtrer les travaux en fonction du filtre sélectionné
        const filteredWorks = selectedFilter === "Tous" ? works : works.filter(work => work.category.name === selectedFilter);
        console.log("filteredWorks :", filteredWorks);

        // Supprimez toutes les images actuellement affichées dans la galerie
        gallery.innerHTML = '';

        // Afficher les travaux filtrés
        filteredWorks.forEach(work => {
            const picture = createPicture(work.imageUrl, work.title);
            gallery.appendChild(picture);
        });
    };

    updateGallery();

    return gallery;
};
