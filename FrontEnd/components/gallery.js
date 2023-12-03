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
            this._works.forEach(work => {
                const workFigure = new WorkFigure(work, false).createWorkFigure();
                const modalWorkFigure = new WorkFigure(work, true).createWorkFigure();
    
                this._gallery.appendChild(workFigure);
                this._modalGallery.appendChild(modalWorkFigure);
            });
        }
    }
}

export const gallery = new Gallery();
