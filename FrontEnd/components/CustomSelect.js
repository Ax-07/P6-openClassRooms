export const CustomSelectUI = (categories, checkFields) => {
    const add_work_select_category = document.createElement('select');
    add_work_select_category.name = 'category';
    add_work_select_category.id = 'category';
    add_work_select_category.classList.add('add-work__custom-select');

    categories.forEach((category) => {
        if (category !== 'Tous') {
            const add_work_select_category_options = document.createElement('option');
            add_work_select_category_options.value = category.id;
            add_work_select_category_options.innerText = category.name;
            add_work_select_category_options.classList.add('add-work__select-options');
            add_work_select_category.appendChild(add_work_select_category_options);
        }
    });

    const custom_select = document.createElement('div');
    custom_select.classList.add('add-work__input', 'custom-select', 'custom-select__wrapper');
    let isOpen = false;

    const custom_select_value = document.createElement('p');
    custom_select_value.classList.add('custom-select__value');

    const custom_select_items = document.createElement('ul');
    custom_select_items.classList.add('custom-select', 'custom-select__list');

    categories.forEach((category) => {
        if (category !== 'Tous') {
            const custom_select_item = document.createElement('li');
            custom_select_item.classList.add('custom-select__item');
            custom_select_item.innerText = category.name;
            custom_select_items.appendChild(custom_select_item);

            custom_select_item.addEventListener('click', () => {
                add_work_select_category.value = category.id;
                custom_select_value.innerText = category.name;
                checkFields();
                if (isOpen) {
                    custom_select.classList.remove('opened');
                    custom_select_items.classList.remove('display');
                    isOpen = !isOpen;
                }
            });
        }
    });
    

    custom_select.addEventListener('click', () => {
        isOpen = !isOpen;
        if (!isOpen) {
            custom_select.classList.add('opened');
            custom_select_items.classList.add('display');
        } else {
            custom_select.classList.remove('opened');
            custom_select_items.classList.remove('display');
        }
    });

    custom_select.appendChild(custom_select_value);
    custom_select.appendChild(custom_select_items);
    custom_select.appendChild(add_work_select_category);

    return {custom_select, add_work_select_category};
}
