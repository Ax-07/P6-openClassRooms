import { CustomSelectUI} from '../CustomSelect.js';
import { AddPicture } from '../AddPicture.js';
import { Create_data } from '../../api/Works_API.js';

export const AddWorkFormUI = (categories) => {

    const add_work = document.createElement('form');
    add_work.id = 'add_work';
    add_work.classList.add('add-work');

    const { add_picture_container, add_picture_input } = AddPicture();

    const add_work_label_title = document.createElement('label');
    add_work_label_title.htmlFor = 'title';
    add_work_label_title.classList.add('add-work__label');
    add_work_label_title.innerText = 'Titre';

    const add_work_input_title = document.createElement('input');
    add_work_input_title.type = 'text';
    add_work_input_title.name = 'title';
    add_work_input_title.id = 'title';
    add_work_input_title.classList.add('add-work__input', 'add-work__input--title');

    const add_work_label_category = document.createElement('label');
    add_work_label_category.htmlFor = 'category';
    add_work_label_category.classList.add('add-work__label');
    add_work_label_category.innerText = 'Catégorie';

    const {custom_select, add_work_select_category} = CustomSelectUI(categories, checkFields);

    const add_work_submit_button = document.createElement('input');
    add_work_submit_button.type = 'submit';
    add_work_submit_button.value = 'Ajouter';
    add_work_submit_button.classList.add('add-work__btn','btn-primary');
    add_work_submit_button.disabled = true;

    add_picture_input.addEventListener('input', checkFields);
    add_work_input_title.addEventListener('input', checkFields);

function checkFields() {
    const titleValue = add_work_input_title.value; console.log('titleValue:', titleValue);
    const categoryValue = add_work_select_category.value; console.log('categoryValue:', categoryValue);
    const pictureValue = add_picture_input.files[0]; console.log('pictureValue:', pictureValue);

    // Vérifiez si tous les champs sont remplis
    if (titleValue.length > 3 && categoryValue && pictureValue) {
        add_work_submit_button.disabled = false; // Activer le bouton si tous les champs sont remplis
    } else {
        add_work_submit_button.disabled = true; // Désactiver le bouton si un champ n'est pas rempli
    }
}

add_work.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    const titleValue = add_work_input_title.value;
    const categoryValue = add_work_select_category.value;
    const pictureValue = add_picture_input.files[0];
    // Vérifiez à nouveau si tous les champs sont remplis
    if (userId && titleValue && categoryValue && pictureValue) {
        const form_data = new FormData();
        form_data.append('title', titleValue);
        form_data.append('category', categoryValue);
        form_data.append('image', pictureValue);

        const data = Create_data(form_data);
        
        console.log('data:', data);
    }
});


    add_work.appendChild(add_picture_container);
    add_work.appendChild(add_work_label_title);
    add_work.appendChild(add_work_input_title);
    add_work.appendChild(add_work_label_category);
    add_work.appendChild(custom_select);

    add_work.appendChild(add_work_submit_button);
    
    return add_work
};
