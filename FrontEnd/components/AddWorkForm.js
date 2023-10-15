export const AddWorkForm = (modal_add_picture) => {
    const add_work = document.createElement('form');
    add_work.id = 'add_work';
    add_work.classList.add('add-work');

    const add_work_label_picture = document.createElement('label');
    add_work_label_picture.htmlFor = 'picture';
    add_work_label_picture.classList.add('add-work__label--picture');
    add_work_label_picture.innerText = '+ ajout Photo';

    const add_work_input_picture = document.createElement('input');
    add_work_input_picture.type = 'file';
    add_work_input_picture.name = 'picture';
    add_work_input_picture.id = 'picture';
    add_work_input_picture.classList.add('add-work__input');

    const add_work_label_title = document.createElement('label');
    add_work_label_title.htmlFor = 'title';
    add_work_label_title.classList.add('add-work__label');

    const add_work_input_title = document.createElement('input');
    add_work_input_title.type = 'text';
    add_work_input_title.name = 'title';
    add_work_input_title.id = 'title';
    add_work_input_title.classList.add('add-work__input');

    const add_work_submit_button = document.createElement('input');
    add_work_submit_button.type = 'submit';
    add_work_submit_button.value = 'Ajouter';
    add_work_submit_button.classList.add('add-work__btn');

    add_work.appendChild(add_work_label_picture);
    add_work.appendChild(add_work_input_picture);
    add_work.appendChild(add_work_label_title);
    add_work.appendChild(add_work_input_title);
    add_work.appendChild(add_work_submit_button);
    
    modal_add_picture.appendChild(add_work);
};