import { modalEvent } from "../components/modal/Modal.js";
import { createGal } from "../containers/createGallery.js";
import { addNewWorkToStore, deleteWorkFromStore, user } from "./store.js";

const baseUrl = "http://localhost:5678";
const categoriesUrl = `${baseUrl}/api/categories`;
const worksUrl = `${baseUrl}/api/works`;

export const getAllData = async () => {
    try {
        const responseCategories = await fetch(categoriesUrl);
        const categoriesData = await responseCategories.json();
        sessionStorage.setItem("categories", JSON.stringify(categoriesData));

        const responseWorks = await fetch(worksUrl);
        const worksData = await responseWorks.json();
        sessionStorage.setItem("works", JSON.stringify(worksData));

    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
};

export const createData = async (form_data) => {
    try {
        const response = await fetch(worksUrl, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + user.token,
            },
            body: form_data,
        });

        if (response.ok) {
            const data = await response.json();
            addNewWorkToStore(data);
            createGal();
            modalEvent.closeModal();
        } else {
            console.error("Échec de la création");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des données :", error);
    }
}

export const deleteData = async (id) => {
    try {
        const response = await fetch(worksUrl + "/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + user.token,
            },
        });
        if (response.ok) {
            deleteWorkFromStore(id);
            createGal();
        }
        else {
            console.error("Échec de la suppression");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression des données :", error);
    }
}