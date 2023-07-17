// Hamburger menu

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    overlayClose = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Percente on progressbars

const percents = document.querySelectorAll('.skills__ratings-percent'),
    progressbars = document.querySelectorAll('.skills__ratings-progressbar span');

percents.forEach( (item, i) => {
    progressbars[i].style.width = item.innerHTML;
});