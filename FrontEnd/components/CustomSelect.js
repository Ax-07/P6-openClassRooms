export const CustomSelectUI = (categories) => {
    let isOpen = false;
    
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
                const category = categories[index];
                displaySelectorValue(category);
            });
    });
    

    return {custom_select, add_work_select_category};
}
