/*header*/
/*introduction*/
/*filter*/
/*section title*/

export const setLoggedStyles = () => {
    const header = document.querySelector('.header');
    header.classList.add('header--logged');


    const introdution = document.querySelector('#introduction');
    introdution.classList.add('introduction--logged');
    introdution.style.margin = '0 0 139px 0';
}