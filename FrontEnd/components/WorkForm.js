import { workFormBus } from "../services/eventBus.js";

const title = document.querySelector('.add-work__input--title');


class WorkForm {
    constructor() {
        this._addWorkForm = document.querySelector("#add_work");
        this._picture = '';
        this._title = '';
        this._category = '';

        workFormBus.subscribe('workForm:setFormData', (formData) => {
            console.log('workForm:set form data', formData);
            this._picture = formData.picture; console.log('picture:', this._picture);
            this._title = formData.title; console.log('title:', this._title);
            this._category = formData.category; console.log('category:', this._category);
        });
    }

    resetForm() {
        title.value = '';
        this._picture = '';
        this._title = '';
        this._category = '';
    }

    onSubmit(e) {
        e.preventDefault();

        if (this._picture && this._title && this._category) {
            this.form_data = new FormData();
            this.form_data.append('title', this._title);
            this.form_data.append('category', this._category);
            this.form_data.append('image', this._picture);

            workFormBus.emit('workForm:createWork', this.form_data);
        }
    };

    init() {
        title.addEventListener('input', () => {
            workFormBus.emit('workForm:titleAdded', title.value);
        });
        this._addWorkForm.addEventListener('submit', this.onSubmit.bind(this));
    }
}

export const workForm = new WorkForm();
