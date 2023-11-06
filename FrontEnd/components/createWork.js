import { Delete_data } from "../api/Works_API.js";

const user = localStorage.getItem('token');

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


const createDeleteBtn = (work) => {
    const delete_btn = document.createElement('span');
        delete_btn.classList.add('delete__btn');

        delete_btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("delete btn :", work.id);
            Delete_data(work.id);
        });
        return delete_btn;
}

export const createCard = (work, isInModal) => {
    const card = createCardContainer();
    const work_card_img = createCardImg(work);
    const card_title = createCardTitle(work);

    card.appendChild(work_card_img);
    card.appendChild(card_title);
    
    if (isInModal && user.isConnect) {
        const delete_btn = createDeleteBtn(work);
        card.appendChild(delete_btn);
    }
    return card;
};