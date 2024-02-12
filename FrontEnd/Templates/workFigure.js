import { worksBus } from '../services/eventBus.js';

export class WorkFigure {
    constructor(work, isInModal = false) {
        this._work = work;
        this._isInModal = isInModal;
    }

    createImgElement() {
        const $img = document.createElement('img');
        $img.classList.add('work-card__img');
        $img.src = this._work.imageUrl;
        $img.alt = this._work.title;
        return $img;
    }

    createFigcaptionElement() {
        const $figcaption = document.createElement('figcaption');
        $figcaption.classList.add('work-card__title');
        $figcaption.innerText = this._work.title;
        return $figcaption;
    }

    createDeleteBtn() {
        const $deleteBtn = document.createElement('span');
        $deleteBtn.classList.add('delete__btn');

        $deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            worksBus.emit('workDeleted', this._work);
        });
        return $deleteBtn;
    }

    createWorkFigure() {
        const $figure = document.createElement('figure');
        $figure.classList.add('work-card');

        $figure.append(
            this.createImgElement(),
            this.createFigcaptionElement()
        );

        if (this._isInModal) {
            const $deleteBtn = this.createDeleteBtn();
            $figure.appendChild($deleteBtn);
        }

        return $figure;
    }
}
