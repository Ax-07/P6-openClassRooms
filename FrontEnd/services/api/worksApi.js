import { workFormBus } from "../eventBus.js";

const ApiUrl = "http://localhost:5678";
const categoriesUrl = `${ApiUrl}/api/categories`;
const worksUrl = `${ApiUrl}/api/works`;

export const getAllData = async () => {
    try {
        const responseCategories = await fetch(categoriesUrl);
        const categoriesData = await responseCategories.json();

        const responseWorks = await fetch(worksUrl);
        const worksData = await responseWorks.json();

        return { categoriesData, worksData };
        
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
};

export const createData = async (form_data, userToken) => {
    console.log('form_data:', form_data, userToken);
    try {
        const response = await fetch(worksUrl, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + userToken,
            },
            body: form_data,
        });

        if (response.ok) {
            const data = await response.json();
            workFormBus.emit('workForm:addWork-notification', { isSuccess: true });
            return data;
            
        } else {
            workFormBus.emit('workForm:addWork-notification', { isSuccess: false });
            console.error("Échec de la création");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des données :", error);
    }
}

export const deleteData = async (id, userToken) => {
    try {
        const response = await fetch(worksUrl + "/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + userToken,
            },
        });
        if (response.ok) {
            workFormBus.emit('workForm:deleteWork-notification', { isSuccess: true });
            console.log("Suppression réussie", response);
        }
        else {
            workFormBus.emit('workForm:deleteWork-notification', { isSuccess: false });
            console.error("Échec de la suppression");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression des données :", error);
    }
}