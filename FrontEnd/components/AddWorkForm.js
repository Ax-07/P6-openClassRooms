import { selectCategory } from './CustomSelect.js';
import { AddPicture } from './AddPicture.js';
import { createData } from '../services/api/worksApi.js';
import { addNewWorkToStore, user } from '../services/store.js';
import { createGallery } from './createGallery.js';
import { modalEvent } from './ModalViewController.js';
import { categories } from '../services/store.js';

const add_work = document.querySelector('.add-work');
const add_work_input_title = document.querySelector('.add-work__input--title');
const add_work_submit_button = document.querySelector('.add-work__submit-button');


export const addWorkForm = () => {
    let selectedCategory = null;
    
    const add_picture_input = AddPicture();
    add_picture_input.addEventListener('input', checkFields);
    add_work_input_title.addEventListener('input', checkFields);
    // utilisation d'une fonction callback "selectedCategory" pour definir la category sinon selectCatgory renvoie null.
    const category = selectCategory(categories, checkFields, (category)=>{
        selectedCategory = category;
        console.log('selectedCategory:', selectedCategory);
    })
    
    function checkFields() {
        const titleValue = add_work_input_title.value; console.log('checktitleValue:', titleValue);
        const categoryValue = selectedCategory ? selectedCategory.id : null; console.log('checkcategoryValue:', categoryValue);
        const pictureValue = add_picture_input.files[0]; console.log('checkpictureValue:', pictureValue);
    
        // Vérifie si tous les champs sont remplis et si le titre est supérieur à 3 caractères
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
        const categoryValue = category.id; console.log('categoryValue:', categoryValue);
        const pictureValue = add_picture_input.files[0]; console.log('pictureValue:', pictureValue);
        // Vérifiez à nouveau si tous les champs sont remplis
        if (user.isConnected && titleValue && categoryValue && pictureValue) {
            console.log('Tous les champs sont remplis');
            const form_data = new FormData();
            form_data.append('title', titleValue);
            form_data.append('category', categoryValue);
            form_data.append('image', pictureValue);

            createData(form_data)
            .then((data) => {
                addNewWorkToStore(data);
                createGallery();
                modalEvent.closeModal();
                console.log('ajout reussi')
            })
            .catch((error) => {
                console.log(error);
            });
        }
    });

    return add_work
};
