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