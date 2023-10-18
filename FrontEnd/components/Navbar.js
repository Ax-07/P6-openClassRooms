export const Navbar = () => {
    const user = localStorage.getItem('token');
    if (user) {
        
    }

    document.querySelectorAll('.link').forEach((link) => {
        link.addEventListener('click', () => {
            link.setAttribute('style', 'font-weight: 900;');
            document.querySelectorAll('.link').forEach((otherLink) => {
                if (otherLink !== link) {
                    otherLink.setAttribute('style', 'font-weight: 400;');
                }
            });
        });
    });
};
