import { All_data } from "../api/Works_API.js";
import { Gallery } from "../containers/Gallery.js";

export const Filter = async (works) => {
    const datas = await All_data();
    console.log("datas :", datas);

    let selectedFilter = "Tous";

    if (works) {
        let filter_categories = works.reduce((acc, work) => {
            if (work.category.name && !acc.includes(work.category.name)) {
                acc.push(work.category.name);
            }
            return acc;
        }, []);
        filter_categories = ["Tous", ...filter_categories];
        
        console.log("filter_categories :", filter_categories);

        const filter = document.querySelector('.filter');
        const filter__list = document.createElement('ul');
        filter__list.classList.add('filter__list');
        filter.appendChild(filter__list);

        filter_categories.forEach(category => {
            const filter__item = document.createElement('li');
            filter__item.classList.add('filter__item');
            
            const category_input = document.createElement('input');
            category_input.classList.add('filter__input');
            category_input.type = 'radio';
            category_input.name = 'filter';
            category_input.id = category;
            category_input.value = category;
            
            const category_label = document.createElement('label');
            category_label.innerText = category;
            category_label.htmlFor = category;

            filter__item.appendChild(category_input);
            filter__item.appendChild(category_label); 
            filter__list.appendChild(filter__item);

            category_input.addEventListener('click', () => {
                selectedFilter = category_input.value;
                console.log('Filtre sélectionné :', selectedFilter);
                Gallery(works, selectedFilter);
            });
        });
    }
    else {
        console.error("Une erreur s'est produite lors de la récupération des données.");
    }

    return selectedFilter;
}