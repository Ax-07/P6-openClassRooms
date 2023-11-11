
let isOpen = false;
let category = null;

const add_work_select_category = document.querySelector('.custom-select > select');
const custom_select = document.querySelector('.custom-select');
const custom_select_value = document.querySelector('.custom-select__value');
const custom_select_list = document.querySelector('.custom-select__list');
const custom_select_items = document.querySelectorAll('.custom-select__item');

const openSelector = () => {
    custom_select.classList.add('opened');
    custom_select_list.classList.add('display');
};
const closeSelector = () => {
    custom_select.classList.remove('opened');
    custom_select_list.classList.remove('display');
};
const displaySelectorValue = (category) => {
    add_work_select_category.value = category.id;
    custom_select_value.innerText = category.name;
}

export const selectCategory = (categories, checkFields) => {
    console.log('custom categories:', categories);
    custom_select.addEventListener('click', () => {
        if (isOpen) {
            closeSelector();
        } else {
            openSelector();
        }
        isOpen = !isOpen;
    });
    
    custom_select_items.forEach((customSelectItem, index) => {
            customSelectItem.addEventListener('click', () => {
              category = categories[index]; console.log('custom category:', category);
                displaySelectorValue(category);
                checkFields();
                
            });
    });
    console.log('custom select category:', category);

    return add_work_select_category;
}
