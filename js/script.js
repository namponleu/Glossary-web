/*===========   SHOW MENU   ========== */
const navMenu = document.getElementById('navbar-menu');
const navClose = document.getElementById('navbar-close');
const navToggle = document.getElementById('navbar-toggle');

/* Menu Show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


/** Menu Hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/* Remove Menu Mobile */
const navbarLinks = document.querySelectorAll('.navbar__links');

const linkAction = () => {
    const navMenu = document.getElementById('navbar-menu');
    // When we click on each navbar__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navbarLinks.forEach( n => n.addEventListener('click', linkAction));


// For the active status on page current stay location
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar__links');
    const currentPage = window.location.pathname;

    links.forEach(link => {
        const linkHref = new URL(link.href).pathname;

        if (currentPage.endsWith(linkHref)) {
            link.classList.add('active');
        }
    });
});





// Query product on filter list

// Limit the number of products base on screen size
// const maxProducts = window.innerWidth <= 768 ? 4 : 5;

// vegetables.slice(0, maxProducts).forEach(vegetable => {
//     renderVegetable.innerHTML += CardComponent(vegetable);
// });





/*===========   FOOTER BEHAVIOR   ========== */
// window.addEventListener('resize', function () {
//     const footer = document.querySelector('.footer');
//     const footerRightSide = document.getElementById('footer-right-side');

//     if(footerRightSide) {
//         // Check the screen width
//         if(window.innerWidth > 1200) {
//             footerRightSide.style.textAlign = "end";
//         } else {
//             // Align the footer right side to the left on smaller screens
//             footerRightSide.style.textAlign = "start";
//         }
//     } else {
//         footer.style.textAlign = "normal";
//     }
// })


// window.addEventListener("click", function toggleMenu() {
//     const navbarLinks = document.querySelector('.navbar-links');
//     const navbar = document.querySelector('.hamburger-menu'); 

//     navbarLinks.classList.toggle('show');
//     navbar.classList.toggle('hamburger-menu-active');
// });

// function toggleMenu() {
//     const navbarLinks = document.querySelector('.navbar-links');
//     navbarLinks.classList.toggle('show');
// }

// function toggleMenu() {
//     const navbarLinks = document.querySelector('.navbar-links');
//     const navbar = document.querySelector('.hamburger-menu'); 

//     navbarLinks.classList.toggle('show');
//     navbar.classList.toggle('hamburger-menu-active');
// }

