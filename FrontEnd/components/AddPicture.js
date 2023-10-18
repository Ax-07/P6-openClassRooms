export const AddPicture = () => {
    const add_picture_wrapper = document.createElement('div');
    add_picture_wrapper.classList.add('add-picture','add-picture__wrapper');

    const add_picture_icon = document.createElement('span');
    add_picture_icon.classList.add('fa-regular', 'fa-image', 'add-picture__icon');
    
    const add_picture_label_btn = document.createElement('label');
    add_picture_label_btn.htmlFor = 'picture';
    add_picture_label_btn.classList.add('add-picture', 'add-picture__btn');
    add_picture_label_btn.innerText = '+ Ajouter Photo';
    
    const add_picture_input = document.createElement('input');
    add_picture_input.type = 'file';
    add_picture_input.name = 'picture';
    add_picture_input.id = 'picture';
    add_picture_input.classList.add('add-picture__input');

    const add_picture_txt = document.createElement('p');
    add_picture_txt.classList.add('add-picture__txt');
    add_picture_txt.innerText = 'jpg, png : 4mo max';

    const add_picture_preview = document.createElement('img');
    add_picture_preview.id = 'picture-preview';
    add_picture_preview.classList.add('add-picture__preview');
    add_picture_preview.style.display = 'none';

    add_picture_input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            add_picture_preview.style.display = 'block';
            reader.addEventListener('load', () => {
                add_picture_preview.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(file);
            add_picture_preview.style.display = 'block';
        }
    });

    add_picture_wrapper.appendChild(add_picture_icon);
    add_picture_wrapper.appendChild(add_picture_label_btn);
    add_picture_wrapper.appendChild(add_picture_input);
    add_picture_wrapper.appendChild(add_picture_txt);
    add_picture_wrapper.appendChild(add_picture_preview);

    return add_picture_wrapper;
}