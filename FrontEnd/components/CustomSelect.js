import { workFormBus } from "../services/eventBus.js";

class CustomSelect {
    constructor() {
        this.selectedCategory = null;
        this.isOpen = false;
        this.customSelect = document.querySelector('.custom-select');
        this.customSelectValue = document.querySelector('.custom-select__value');
        this.customSelectList = document.querySelector('.custom-select__list');
        this.customSelectItems = document.querySelectorAll('.custom-select__item');
        this.addWorkSelectCategory = document.querySelector('.custom-select > select');
    }

    openSelector() {
        this.customSelect.classList.add('opened');
        this.customSelectList.classList.add('display');
    }

    closeSelector() {
        this.customSelect.classList.remove('opened');
        this.customSelectList.classList.remove('display');
    }

    displaySelectorValue(category) {
        this.customSelectValue.innerText = category.name;
    }

    resetSelectedCategory() {
        this.selectedCategory = 'selectionner une categorie';
        this.customSelectValue.innerText = 'Choisissez une catégorie';
    }

    init(categories) {
        this.categories = categories;
        this.customSelect.addEventListener('click', () => {
            if (this.isOpen) {
                this.closeSelector();
            } else {
                this.openSelector();
            }
            this.isOpen = !this.isOpen;
        });

        this.customSelectItems.forEach((customSelectItem, index) => {
            customSelectItem.addEventListener('click', () => {
                this.selectedCategory = this.categories[index];
                this.displaySelectorValue(this.selectedCategory);
                workFormBus.emit('workForm:categorySelected', this.selectedCategory);
            });
        });
    }

    getSelectedCategory() {
        return this.selectedCategory;
    }
} 

export const customSelect = new CustomSelect();