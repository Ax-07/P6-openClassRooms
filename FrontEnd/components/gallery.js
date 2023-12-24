import { WorkFigure } from "../Templates/workFigure.js";

export class Gallery {
    constructor() {
        this._works = [];
        this._gallery = document.querySelector('.gallery');
        this._modalGallery = document.querySelector('.modal__gallery');
    }

    setWorks(works) {
        this._works = works;
        this.render();
    }
    
    render() {
        this._gallery.innerHTML = '';
        this._modalGallery.innerHTML = '';
        if (this._works) {
            const fragment = document.createDocumentFragment();
            const modalFragment = document.createDocumentFragment();
    
            this._works.forEach(work => {
                const workFigure = new WorkFigure(work, false).createWorkFigure();
                const modalWorkFigure = new WorkFigure(work, true).createWorkFigure();
    
                fragment.appendChild(workFigure);
                modalFragment.appendChild(modalWorkFigure);
            });
    
            this._gallery.appendChild(fragment);
            this._modalGallery.appendChild(modalFragment);
        }
    }
}

export const gallery = new Gallery();
