/* header */
/* introduction */
/* portfolio */
/*filter*/

export const setLoggedStyles = () => {
    const header = document.querySelector('.header');
    header.classList.add('header--logged');

    const introdution = document.querySelector('#introduction');
    introdution.classList.add('introduction--logged');

    const filter = document.querySelector('.filter');
    filter.classList.add('filter--logged');

    const portfolio = document.querySelector('#portfolio');
    portfolio.classList.add('portfolio--logged');
}