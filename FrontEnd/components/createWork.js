import { deleteData } from "../services/api/worksApi.js";
import { worksBus } from "../services/eventBus.js";
import { deleteWorkFromStore, user } from "../services/store.js";

const createCardContainer = () => {
    const card = document.createElement('figure');
    card.classList.add('work-card');
    return card;
}
const createCardImg = (work) => {
    const card_img = document.createElement('img');
    card_img.classList.add('work-card__img');
    card_img.src = work.imageUrl;
    card_img.alt = work.title;
    return card_img;
};
const createCardTitle = (work) => {
    const card_title = document.createElement('figcaption');
    card_title.classList.add('work-card__title');
    card_title.innerText = work.title;
    return card_title;
};

const deleteWork = (id, token) => {
    console.log('deleteWork id:', id);
    console.log('deleteWork token:', token);
    deleteData(id, token);
    deleteWorkFromStore(id);
}

const createDeleteBtn = (work) => {
    const delete_btn = document.createElement('span');
    delete_btn.classList.add('delete__btn');

    delete_btn.addEventListener('click', (e) => {
        e.preventDefault();
        worksBus.emit('workDeleted', work);
        deleteWork(work.id, user.token);
        workStore.dispatch('workDeleted', work);

    });
    return delete_btn;
}

export const createCard = (work, isInModal) => {
    const card = createCardContainer();
    const work_card_img = createCardImg(work);
    const card_title = createCardTitle(work);

    card.appendChild(work_card_img);
    card.appendChild(card_title);

    if (isInModal && user.isConnected) {
        const delete_btn = createDeleteBtn(work);
        card.appendChild(delete_btn);
    }
    return card;
};