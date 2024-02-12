import { logout } from '../services/api/logsApi.js';

export const setLogoutLink = () => {
    const log_link = document.querySelector('.navbar__item--log');
    log_link.innerText = 'Logout';
    log_link.href = '#';
    log_link.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
}

export const setActiveNavLink = () => {
    const nav_list_items_link = document.querySelectorAll('.navbar__link');

    nav_list_items_link.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add('navbar__link--active');
        }

        link.addEventListener('click', () => {
            nav_list_items_link.forEach((item) => {
                item.classList.remove('navbar__link--active');
            });
            link.classList.add('navbar__link--active');
        });
    });
};
setActiveNavLink();