import { Logout } from '../api/Log.js'

export const Navbar = () => {
    const user = localStorage.getItem('token');

    if (user) {
        const log_link = document.querySelector('.navbar__item--log');
        log_link.innerText = 'Logout';
        log_link.href = '#';
        log_link.addEventListener('click', (e) => {
            e.preventDefault();
            Logout();
        });
    }

    const nav_list_items_link = document.querySelectorAll('.navbar__link');
    console.log('nav_list_items_link:', nav_list_items_link);
    nav_list_items_link.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add('navbar__link--active');
            console.log('link.href origin:', link.href);
        }
        link.addEventListener('click', (e) => {
            nav_list_items_link.forEach((item) => {
                item.classList.remove('navbar__link--active');
            });

            console.log('link.href:', link.href);
            console.log('window.location.href:', window.location.href);
            link.classList.add('navbar__link--active');
        });
    });
};
