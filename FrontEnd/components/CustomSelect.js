export const CustomSelectUI = (filter_categories) => {
    const add_work_select_category = document.createElement('select');
    add_work_select_category.name = 'category';
    add_work_select_category.id = 'category';
    add_work_select_category.classList.add('add-work__custom-select');

    filter_categories.forEach((category) => {
        if (category !== 'Tous') {
            const add_work_select_category_options = document.createElement('option');
            add_work_select_category_options.value = category;
            add_work_select_category_options.innerText = category;
            add_work_select_category_options.classList.add('add-work__select-options');
            add_work_select_category.appendChild(add_work_select_category_options);
        }
    });

    const add_work_custom_select = document.createElement('div');
    add_work_custom_select.classList.add('add-work__input', 'add-work__input--select');
    let isOpen = false;

    const add_work_custom_select_value = document.createElement('span');
    add_work_custom_select_value.classList.add('add-work__custom-select-value');

    const add_work_custom_select_items = document.createElement('ul');
    add_work_custom_select_items.classList.add('add-work__custom-select-items');

    filter_categories.forEach((category) => {
        if (category !== 'Tous') {
            const add_work_custom_select_item = document.createElement('li');
            add_work_custom_select_item.classList.add('add-work__custom-select-item');
            add_work_custom_select_item.innerText = category;
            add_work_custom_select_items.appendChild(add_work_custom_select_item);

            add_work_custom_select_item.addEventListener('click', () => {
                console.log('Catégorie sélectionnée :', category);
                add_work_select_category.value = category;
                add_work_custom_select_value.innerText = category;
                console.log('Catégorie sélectionnée du formulaire:', add_work_select_category.value);
                if (isOpen) {
                    add_work_custom_select.classList.remove('active');
                    add_work_custom_select_items.classList.remove('display');
                    isOpen = !isOpen;
                }
            });
        }
    });

    add_work_custom_select.addEventListener('click', () => {
        isOpen = !isOpen;
        if (!isOpen) {
            add_work_custom_select.classList.add('active');
            add_work_custom_select_items.classList.add('display');
        } else {
            add_work_custom_select.classList.remove('active');
            add_work_custom_select_items.classList.remove('display');
        }
    });

    add_work_custom_select.appendChild(add_work_custom_select_value);
    add_work_custom_select.appendChild(add_work_custom_select_items);
    add_work_custom_select.appendChild(add_work_select_category);

    return add_work_custom_select;
}
