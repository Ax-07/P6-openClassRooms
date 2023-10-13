import { Gallery } from "../containers/Gallery.js";

export const Filter = async (works) => {

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

        filter_categories.forEach((category) => {
            const filter__item = document.createElement('li');
            filter__item.classList.add('filter__item',`filter__item--${category.replace(/[&\s]/g, "")}`);
            
            const filter_input = document.createElement('input');
            filter_input.classList.add('filter__input');
            filter_input.type = 'radio';
            filter_input.name = 'filter';
            filter_input.id = category;
            filter_input.value = category;
            
            const filter_label = document.createElement('label');
            filter_label.classList.add('filter__label');
            const filter_label_text = document.createElement('h2');
            filter_label_text.classList.add('filter__label-text');
            filter_label_text.innerText = category;
            filter_label.htmlFor = category;

            filter_label.appendChild(filter_label_text);
            filter__item.appendChild(filter_input);
            filter__item.appendChild(filter_label); 
            filter__list.appendChild(filter__item);

            filter_input.addEventListener('click', () => {
                filter_categories.forEach((category) => {
                    const item = document.querySelector(`.filter__item--${category.replace(/[&\s]/g, "")}`);
                    const label_text = item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément
                    item.classList.remove('active');
                    label_text.classList.remove('active');
                });
                filter__item.classList.add('active');
                const label_text = filter__item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément
                label_text.classList.add('active');
                
                selectedFilter = filter_input.value;
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
