import { CustomSelectUI} from '../CustomSelect.js';
import { AddPicture } from '../AddPicture.js';
import { Create_data } from '../../api/Works_API.js';

export const AddWorkFormUI = (categories) => {

    const add_work = document.querySelector('.add-work');
    const add_work_input_title = document.querySelector('.add-work__input--title');
    const add_work_submit_button = document.querySelector('.add-work__submit-button');

    const {add_picture_input } = AddPicture();
    const {add_work_select_category} = CustomSelectUI(categories, checkFields);

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
    
    return add_work
};
