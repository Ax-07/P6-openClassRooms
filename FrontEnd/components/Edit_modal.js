import { user } from "../services/store.js";
import { modalEvent } from "./ModalViewController.js";

const edit_banner = document.querySelector('.edit__banner');
const edit_btn = document.querySelector('.edit__btn');

const displayEditBanner = () => {
    edit_banner.style.display = 'flex';
}

export const Edit_modal = () => {
    displayEditBanner();
    edit_btn.addEventListener('click', () => modalEvent.openModal());

    edit_banner.appendChild(edit_btn);
}