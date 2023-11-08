import { createCard } from "../components/createWork.js";
import { modalEvent } from "../components/modal/Modal.js";

export const All_data = async () => {
    const categories_url = "http://localhost:5678/api/categories";
    const works_url = "http://localhost:5678/api/works";

    let categoriesData, worksData;

    try {
        const responseCategories = await fetch(categories_url);
        categoriesData = await responseCategories.json();

        const responseWorks = await fetch(works_url);
        worksData = await responseWorks.json();

    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }

    return { categoriesData, worksData };
};

export const Refresh_Data = async () => {
    const refresh_data = await All_data();
    updateGallery(refresh_data);

    function updateGallery(refresh_data) {
        const gallery = document.querySelector(".gallery");
        gallery.innerHTML = "";
        const modal_gallery = document.querySelector(".modal__gallery");
        modal_gallery.innerHTML = "";
        refresh_data.worksData.forEach((work) => {
            const figure = createCard(work, false);
            gallery.appendChild(figure);
            const figure_modal = createCard(work, true);
            modal_gallery.appendChild(figure_modal);
        });
    }
}

export const Create_data = async (form_data) => {
    const works_url = "http://localhost:5678/api/works";
    const token =localStorage.getItem("token");
    try {
        const response = await fetch(works_url, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
            },
            body: form_data,
        });

        if (response.ok) {
            const data = await response.json();
            console.log("data :", data);
            Refresh_Data();
            modalEvent.closeModal();
        } else {
            console.error("Échec de la création");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des données :", error);
    }
}

export const Delete_data = async (id) => {
    const works_url = "http://localhost:5678/api/works";
    console.log("works_url :", works_url);
    console.log("id :", id);
    try {
        const response = await fetch(works_url + "/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        });
        if (response.ok) {
            Refresh_Data();
        }
        else {
            console.error("Échec de la suppression");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression des données :", error);
    }
}