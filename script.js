// 1. Select the menu from the DOM
let menuButton = document.querySelector('.menu-btn')

// 2. Add an event listener to the menu button

// unnamed or anonymous function
menuButton.addEventListener("click", (event) => {

    let nav = document.querySelector('nav');

    // if(nav.style.display === '') {
    //     nav.style.display = 'flex';
    // } else {
    //     nav.style.display = '';
    // }

    nav.style.display = nav.style.display === ''? 'flex' : '';

    menuButton.classList.toggle('change');

});