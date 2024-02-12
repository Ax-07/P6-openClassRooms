import { workFormBus } from "../services/eventBus.js";

class AddPicture {
    constructor() {
        this._file = null;
        this.add_picture_wrapper = document.querySelector('.add-picture__wrapper');
        this.add_picture_input = document.querySelector('.add-picture__input');
        this.add_picture_preview = document.querySelector('.add-picture__preview');
    }

    displayPreviewPicture() {
        this.add_picture_preview.classList.add('add-picture__preview--active');
    }

    hidePreviewPicture() {
        this.add_picture_preview.classList.remove('add-picture__preview--active');
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
            const fileSizeInMB = this._file.size / (1024 * 1024); console.log('fileSizeInMB:', fileSizeInMB);
            if (fileSizeInMB > 4) {
                this.add_picture_input.value = '';
                alert("Le fichier est trop grand. Veuillez choisir un fichier de moins de 4 Mo.");
                return;
            }
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
        this.add_picture_input.addEventListener('change', this.handleInputChange.bind(this));
    }
}

export const addPicture = new AddPicture();
