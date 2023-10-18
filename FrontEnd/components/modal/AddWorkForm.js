import { CustomSelectUI} from '../CustomSelect.js';
import { AddPicture } from '../AddPicture.js';

export const AddWorkFormUI = (filter_categories) => {

    const add_work = document.createElement('form');
    add_work.id = 'add_work';
    add_work.classList.add('add-work');

    const add_work_add_picture = AddPicture();

    const add_work_label_title = document.createElement('label');
    add_work_label_title.htmlFor = 'title';
    add_work_label_title.classList.add('add-work__label--txt');
    add_work_label_title.innerText = 'Titre';

    const add_work_input_title = document.createElement('input');
    add_work_input_title.type = 'text';
    add_work_input_title.name = 'title';
    add_work_input_title.id = 'title';
    add_work_input_title.classList.add('add-work__input', 'add-work__input--title');

    const add_work_label_category = document.createElement('label');
    add_work_label_category.htmlFor = 'category';
    add_work_label_category.classList.add('add-work__label--txt');
    add_work_label_category.innerText = 'Catégorie';

    const add_work_custom_select = CustomSelectUI(filter_categories);

    const add_work_submit_button = document.createElement('input');
    add_work_submit_button.type = 'submit';
    add_work_submit_button.value = 'Ajouter';
    add_work_submit_button.classList.add('add-work__btn','btn-primary');

    add_work.appendChild(add_work_add_picture);
    add_work.appendChild(add_work_label_title);
    add_work.appendChild(add_work_input_title);
    add_work.appendChild(add_work_label_category);
    add_work.appendChild(add_work_custom_select);

    add_work.appendChild(add_work_submit_button);
    
    return add_work
};




