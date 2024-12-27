let sidebar = document.querySelector('.sidebar');
let menuButton = document.querySelector('.navbar__s4'); 

menuButton.addEventListener('click', () => {
    if (sidebar.style.left === '-60%') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-60%';
    }
});
