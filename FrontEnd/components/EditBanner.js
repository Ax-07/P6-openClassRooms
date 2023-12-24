import { modal } from "./Modal.js";

export class EditBanner {
    constructor() {
        this._edit_banner = document.querySelector('.edit__banner');
        this._edit_btn = document.querySelectorAll('.edit__btn');
        this._edit_btn.forEach(btn => {
            btn.addEventListener('click', () => modal.openModal());
        });
        console.log('EditBanner executé');
    }
    
    display() {
        this._edit_banner.style.display = 'flex';
        this._edit_btn.forEach(btn => {
            btn.style.display = 'flex';
        });
    }
};