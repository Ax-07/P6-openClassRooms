import { selectCategory} from '../CustomSelect.js';
import { AddPicture } from '../AddPicture.js';
import { createData } from '../../api/Works_API.js';
import { user } from '../../api/store.js';

export const addWorkForm = (categories) => {
    const add_work = document.querySelector('.add-work');
    const add_work_input_title = document.querySelector('.add-work__input--title');
    const add_work_submit_button = document.querySelector('.add-work__submit-button');

    const {add_picture_input } = AddPicture();
    const category = selectCategory(categories, checkFields);
    add_picture_input.addEventListener('input', checkFields);
    add_work_input_title.addEventListener('input', checkFields);

function checkFields() {
    const titleValue = add_work_input_title.value; console.log('titleValue:', titleValue);
    const categoryValue = category.value; console.log('categoryValue:', categoryValue);
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
    console.log('add_work submit');

    const titleValue = add_work_input_title.value; console.log('titleValue:', titleValue);
    const categoryValue = category.value; console.log('categoryValue:', categoryValue);
    const pictureValue = add_picture_input.files[0]; console.log('pictureValue:', pictureValue);
    // Vérifiez à nouveau si tous les champs sont remplis
    if (user.isConnected && titleValue && categoryValue && pictureValue) {
        console.log('Tous les champs sont remplis');
        const form_data = new FormData();
        form_data.append('title', titleValue);
        form_data.append('category', categoryValue);
        form_data.append('image', pictureValue);

        const data = createData(form_data);
        console.log('data:', data);
    }
});
    
    return add_work
};
