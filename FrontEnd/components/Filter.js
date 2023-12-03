import { worksBus } from "../services/eventBus.js";

class Filter {
    constructor() {
        this._filteredWorks = [];
        this._categories = [];
        this._filter = document.querySelector('.filter');
        this._filterList = document.querySelector('.filter__list');
        this._selectedFilter = "Tous";
    }
    setCategories(categories) {
        this._categories = new Set(["Tous"]);
        categories.forEach((category) => {
            if (category.name) {
                this._categories.add(category.name);
            }
        });
        console.log("setCategories :", this._categories);
        this.render();
    }
    setActiveFilter(selectedFilter) {
        this._categories.forEach((category) => {
            const item = document.querySelector(`.filter__item--${category.replace(/[&\s]/g, "")}`);
            const label_text = item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément
            item.classList.remove('active');
            label_text.classList.remove('active');
        });
        const filter__item = document.querySelector(`.filter__item--${selectedFilter.replace(/[&\s]/g, "")}`);
        filter__item.classList.add('active');
        const label_text = filter__item.querySelector('.filter__label-text'); // Trouver le label-text spécifique à l'élément   
        label_text.classList.add('active');
    }
    setFilter(selectedFilter) {
        this._selectedFilter = selectedFilter;
        this.setActiveFilter(selectedFilter);
    }
    setFilteredWorks(works, selectedFilter) {
        this._filteredWorks = [];
        if (selectedFilter === "Tous") {
            this._filteredWorks = works;
        } else {
            works.forEach((work) => {
                if (work.category.name === selectedFilter) {
                    this._filteredWorks.push(work);
                }
            });
        }
        console.log("setFilteredWorks :", this._filteredWorks);
        return this._filteredWorks;
    }
    display() {
        this._filter.style.display = 'flex';
    }

    render() {
        this._filterList.innerHTML = '';
        console.log('store categories filter:', this._categories);
        if (this._categories) {
            this._categories.forEach(category => {
                const filterItem = createFilterItem(category);
                this._filterList.appendChild(filterItem);
            });
        }
    }
}

export const filter = new Filter();

function createFilterInput(category) {
    const filter_input = document.createElement('input');
    filter_input.classList.add('filter__input');
    filter_input.type = 'radio';
    filter_input.name = 'filter';
    filter_input.id = category;
    filter_input.value = category;
    return filter_input;
};
function createFilterLabel(category) {
    const filter_label = document.createElement('label');
    filter_label.classList.add('filter__label');
    const filter_label_text = document.createElement('h2');
    filter_label_text.classList.add('filter__label-text');
    filter_label_text.innerText = category;
    filter_label.htmlFor = category;
    filter_label.appendChild(filter_label_text);
    return filter_label;
};
function createFilterItem(category) {
    const filter__item = document.createElement('li');
    filter__item.classList.add('filter__item', `filter__item--${category.replace(/[&\s]/g, "")}`);
    const filter_input = createFilterInput(category);
    const filter_label = createFilterLabel(category);
    filter__item.appendChild(filter_input);
    filter__item.appendChild(filter_label);

    filter_input.addEventListener('change', (e) => {
        e.preventDefault();
        const selectedFilter = e.target.value;
        filter.setFilter(selectedFilter);
        worksBus.emit('filterChanged', selectedFilter);
    });

    return filter__item;
};