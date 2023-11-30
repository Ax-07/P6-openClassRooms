import { createData } from "../api/worksApi.js";
import { workFormBus, worksBus } from "../eventBus.js";
import  { storeWorks } from "../../models/workStore.js";
import { user } from "../../models/user.js";
import { modalEvent } from "../../components/ModalViewController.js";
import { addPicture } from "../../components/AddPicture.js";
import { customSelect } from "../../components/CustomSelect.js";
import { workForm } from "../../components/WorkForm.js";

const add_work_submit_button = document.querySelector('.add-work__submit-button');

let fieldStates = {
    pictureValid: false,
    categoryValid: false,
    titleValid: false
};

let formData = {
    title: '',
    category: '',
    picture: ''
};
export const workFormBus_Subscription = () => {

    workFormBus.subscribe('workForm:pictureAdded', (picture) => {
        console.log('workForm:picture added:', picture);
        if (picture) {
            fieldStates.pictureValid = true;
            formData.picture = picture;
            console.log('workForm:picture added:', true);
            workFormBus.emit('workForm:checkFields');
            console.log('formData:', formData);

        }
    });

    workFormBus.subscribe('workForm:categorySelected', (selectedCategory) => {
        console.log('workForm:receive category selected:', selectedCategory);
        if (selectedCategory.id > 0) {
            fieldStates.categoryValid = true;
            formData.category = selectedCategory.id;
            console.log('workForm:category selected:', true);
            workFormBus.emit('workForm:checkFields');
            console.log('formData:', formData);

        }
    });

    workFormBus.subscribe('workForm:titleAdded', (title) => {
        console.log('workForm:title added:', title);
        if (title && title.length > 3) {
            fieldStates.titleValid = true;
            formData.title = title;
            workFormBus.emit('workForm:checkFields');
            console.log('formData:', formData);

        }
    });

    workFormBus.subscribe('workForm:formData', () => {
        workFormBus.emit('workForm:setFormData', formData);
        console.log('workForm:form data', formData);
    });

    
    workFormBus.subscribe('workForm:checkFields', () => {
        console.log('workForm:check fields');
        if (fieldStates.pictureValid && fieldStates.categoryValid && fieldStates.titleValid) {
            add_work_submit_button.disabled = false;
        } else {
            add_work_submit_button.disabled = true;
        }
        workFormBus.emit('workForm:formData');
    });
    
    workFormBus.subscribe('workForm:createWork', (form_data) => {
        console.log('workForm:create work', form_data);
        createData(form_data, user.token)
        .then((data) => {
            storeWorks.addNewWorkToStore(data);
            modalEvent.closeModal();
            worksBus.emit('workCreated', data);
            console.log('ajout reussi')
        })
        .then(() => {
            workFormBus.emit('workForm:resetForm');
            console.log('workForm:reset form');
        })
        .catch((error) => {
            console.log(error);
        });
    });
    
    workFormBus.subscribe('workForm:resetForm', () => {
        addPicture.resetPicture(); console.log('reset picture', addPicture);
        customSelect.resetSelectedCategory(); console.log('reset category', customSelect); 
        workForm.resetForm(); console.log('reset form', workForm);
    });
}