export const All_data = async () => {
    const categories_url = "http://localhost:5678/api/categories";
    const works_url = "http://localhost:5678/api/works";

    let categoriesData, worksData;

    try {
        const responseCategories = await fetch(categories_url);
        categoriesData = await responseCategories.json();
        // console.log("Catégories :", categoriesData);

        const responseWorks = await fetch(works_url);
        worksData = await responseWorks.json();
        // console.log("Travaux :", worksData);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }

    return { categoriesData, worksData };
};
export const Create_data = async (data) => {
    const works_url = "http://localhost:5678/api/works";
    try {
        const response = await fetch(works_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const data = await response.json();
        console.log("data :", data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des données :", error);
    }
}
export const Delete_data = async (id) => {
    const works_url = "http://localhost:5678/api/works";
    try {
        const response = await fetch(works_url + "/" + id, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log("data :", data);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression des données :", error);
    }
}