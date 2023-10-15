import { Gallery_page } from "../containers/Gallery.js";

export const Filter = async (works) => {

    let selectedFilter = "Tous";
    let filter_categories = new Set(["Tous"]);

    if (works) {
        works.forEach((work) => {
            if (work.category.name) {
                filter_categories.add(work.category.name);
            }
        });

        console.log("filter_categories :", filter_categories);

        const filter = document.querySelector('.filter');
        const filter__list = document.createElement('ul');
        filter__list.classList.add('filter__list');
        filter.appendChild(filter__list);

        filter_categories.forEach((category) => {
            // #region filter list item
            const filter__item = document.createElement('li');
            filter__item.classList.add('filter__item', `filter__item--${category.replace(/[&\s]/g, "")}`);
            // #endregion filter list item
            // #region filter input
            const filter_input = document.createElement('input');
            filter_input.classList.add('filter__input');
            filter_input.type = 'radio';
            filter_input.name = 'filter';
            filter_input.id = category;
            filter_input.value = category;

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
                Gallery_page(works, selectedFilter);
            });
            // #endregion filter input
            // #region filter label
            const filter_label = document.createElement('label');
            filter_label.classList.add('filter__label');
            const filter_label_text = document.createElement('h2');
            filter_label_text.classList.add('filter__label-text');
            filter_label_text.innerText = category;
            filter_label.htmlFor = category;
            // #endregion filter label

            filter_label.appendChild(filter_label_text);
            filter__item.appendChild(filter_input);
            filter__item.appendChild(filter_label);
            filter__list.appendChild(filter__item);
        });
    }
    else {
        console.error("Une erreur s'est produite lors de la récupération des données.");
    }

    return selectedFilter;
}
