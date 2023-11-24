import { createCard } from "./createWork.js";

export class Gallery {
    constructor() {
        this._works = [];
        this._gallery = document.querySelector('.gallery');
        this._modalGallery = document.querySelector('.modal__gallery');
    }

    setWorks(works) {
        this._works = works;
        console.log('setWorks gallery:', this._works);
        this.render();
    }
    
    render() {
        this._gallery.innerHTML = '';
        this._modalGallery.innerHTML = '';
        console.log('store works gallery:', this._works);
        if (this._works) {
            this._works.forEach(work => {
                const card = createCard(work, false);
                const modalCard = createCard(work, true);
    
                this._gallery.appendChild(card);
                this._modalGallery.appendChild(modalCard);
            });
        }
    }
}

export const gallery = new Gallery();
