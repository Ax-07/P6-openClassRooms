const add_picture_wrapper = document.querySelector('.add-picture__wrapper');
const add_picture_input = document.querySelector('.add-picture__input');
const add_picture_preview = document.querySelector('.add-picture__preview');

export const AddPicture = () => {

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
            add_picture_wrapper.style.display = 'none';
        }
    });

    return add_picture_input;
}