// window.addEventListener("scroll", function () {
//     const nav = document.querySelector(".nav");
//     const isShopPage = document.body.classList.contains('shop-page'); // Check if it's the shop page

//     if (isShopPage) {
//         if (window.scrollY > 660) {
//             /* Solid background on scroll */
//             nav.style.background = "rgba(255, 255, 255)";
//         } else {
//             /* Transparent when at top */
//             nav.style.background = "transparent";
//         }
//     } else {
//         nav.style.background = "rgb(255, 255, 255)";
//     }
// });


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

