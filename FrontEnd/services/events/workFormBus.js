import { createData } from "../api/worksApi.js";
import { workFormBus, worksBus } from "../eventBus.js";
import { storeWorks } from "../../models/workStore.js";
import { user } from "../../models/user.js";
import { modal } from "../../components/Modal.js";
import { addPicture } from "../../components/AddPicture.js";
import { customSelect } from "../../components/CustomSelect.js";
import { workForm } from "../../components/WorkForm.js";
import { notification } from "../../components/Notification.js";

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
        if (picture.size <= 4*(1024*1024)) {
            fieldStates.pictureValid = true;
            formData.picture = picture;
            workFormBus.emit('workForm:checkFields');
        }
        else {
            fieldStates.pictureValid = false;
            formData.picture = '';
            workFormBus.emit('workForm:checkFields');
        }
    });

    workFormBus.subscribe('workForm:categorySelected', (selectedCategory) => {
        console.log('workForm:receive category selected:', selectedCategory);
        if (selectedCategory.id > 0) {
            fieldStates.categoryValid = true;
            formData.category = selectedCategory.id;
            workFormBus.emit('workForm:checkFields');
        }
    });

    workFormBus.subscribe('workForm:titleAdded', (title) => {
        console.log('workForm:title added:', title);
        if (title && title.length > 3) {
            fieldStates.titleValid = true;
            formData.title = title;
            workFormBus.emit('workForm:checkFields');
        }
    });

    workFormBus.subscribe('workForm:formData', () => {
        workFormBus.emit('workForm:setFormData', formData);
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
                modal.closeModal();
                worksBus.emit('workCreated', data);
            })
            .then(() => {
                workFormBus.emit('workForm:resetForm');
            })
            .catch((error) => {
                console.log(error);
            });
    });

    workFormBus.subscribe('workForm:addWork-notification', (response) => {
        notification.displayAddWorkNotifications(response);
    });

    workFormBus.subscribe('workForm:deleteWork-notification', (response) => {
        notification.displayDeleteWorkNotifications(response);
    });

    workFormBus.subscribe('workForm:resetForm', () => {
        addPicture.resetPicture();
        customSelect.resetSelectedCategory(); 
        workForm.resetForm();
        add_work_submit_button.disabled = true;
    });
}