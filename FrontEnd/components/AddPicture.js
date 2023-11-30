import { workFormBus } from "../services/eventBus.js";

class AddPicture {
    constructor() {
        this._file = null;
        this.add_picture_wrapper = document.querySelector('.add-picture__wrapper');
        this.add_picture_input = document.querySelector('.add-picture__input');
        this.add_picture_preview = document.querySelector('.add-picture__preview');

    }

    displayPreviewPicture() {
        this.add_picture_preview.style.display = 'block';
        this.add_picture_wrapper.style.display = 'none';
    }

    hidePreviewPicture() {
        this.add_picture_preview.style.display = 'none';
        this.add_picture_wrapper.style.display = 'flex';
    }

    setPreviewPicture(reader) {
        this.add_picture_preview.setAttribute('src', reader.result);
    }

    resetPicture() {
        this.hidePreviewPicture();
        this._file = null;
    }

    handleInputChange(e) {
        this._file = e.target.files[0];
        if (this._file) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.add_picture_preview.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(this._file);
            this.displayPreviewPicture();
            workFormBus.emit('workForm:pictureAdded', this._file);
        }
    }

    init() {
        console.log('Initializing AddPicture...');
        this.add_picture_input.addEventListener('change', this.handleInputChange.bind(this));

        // Additional initialization logic can be added here.
    }
}

export const addPicture = new AddPicture();
