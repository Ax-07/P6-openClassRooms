import { modalEvent } from "./ModalViewController.js";

/**
 * @class EditBanner
 * @classdesc affiche la bannière et le boutton modifier pour afficher la modale
 * 
 * @property { HTMLElement } _edit_banner - element .edit__banner
 * @property { HTMLElement } _edit_btn - element .edit__btn
 * 
 * @method display - affiche la banière et le boutton
 */

export class EditBanner {
    constructor() {
        this._edit_banner = document.querySelector('.edit__banner');
        this._edit_btn = document.querySelectorAll('.edit__btn');
        this._edit_btn.forEach(btn => {
            btn.addEventListener('click', () => modalEvent.openModal());
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