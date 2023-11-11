import { filteredGal } from "../containers/createGallery.js";
import { user, works, categories } from "../api/store.js";

const filter = document.querySelector('.filter');
const filter_list = document.querySelector('.filter__list');
const section_title = document.querySelector('#portfolio h2');
let selectedFilter = "Tous";

const initFilterCategories = (categories) => {
    let filter_categories = new Set(["Tous"]);
    categories.forEach((category) => {
        if (category.name) {
            filter_categories.add(category.name);
        }
    });
    console.log("filter_categories :", filter_categories);
    return filter_categories;
};
const createFilterItem = (category) => {
    const filter__item = document.createElement('li');
    filter__item.classList.add('filter__item', `filter__item--${category.replace(/[&\s]/g, "")}`);
    return filter__item;
};
const createFilterInput = (category) => {
    const filter_input = document.createElement('input');
    filter_input.classList.add('filter__input');
    filter_input.type = 'radio';
    filter_input.name = 'filter';
    filter_input.id = category;
    filter_input.value = category;
    return filter_input;
};
const createFilterLabel = (category) => {
    const filter_label = document.createElement('label');
    filter_label.classList.add('filter__label');
    const filter_label_text = document.createElement('h2');
    filter_label_text.classList.add('filter__label-text');
    filter_label_text.innerText = category;
    filter_label.htmlFor = category;
    filter_label.appendChild(filter_label_text);
    return filter_label;
};
const setActiveFilter = (filter_categories, selectedFilter) => {
    filter_categories.forEach((category) => {
        const item = document.querySelector(`.filter__item--${category.replace(/[&\s]/g, "")}`);
        const label_text = item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément
        item.classList.remove('active');
        label_text.classList.remove('active');
    });
    const filter__item = document.querySelector(`.filter__item--${selectedFilter.replace(/[&\s]/g, "")}`);
    filter__item.classList.add('active');
    const label_text = filter__item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément   
    label_text.classList.add('active');
};

export const createFilterElement = () => {
    if (!works) {
        return;
    }
    if (user.isConnected) {
        filter.style.display = 'none';
        section_title.style.marginBottom = '92px';
    }
    
    const filter_categories = initFilterCategories(categories);

    filter_categories.forEach((category) => {
        const filter__item = createFilterItem(category);
        const filter_input = createFilterInput(category);
        const filter_label = createFilterLabel(category);

        filter_input.addEventListener('click', () => {
            setActiveFilter(filter_categories, category);
            selectedFilter = filter_input.value;
            // createGallery(selectedFilter);
            filteredGal(selectedFilter);
        });

        filter__item.appendChild(filter_input);
        filter__item.appendChild(filter_label);
        filter_list.appendChild(filter__item);
    });
    console.log("selectedFilter :", selectedFilter);
    console.log("filter_categories :", filter_categories);

    return { selectedFilter, filter_categories };
}