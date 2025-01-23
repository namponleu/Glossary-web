window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    const isShopPage = document.body.classList.contains('shop-page'); // Check if it's the shop page

    if (isShopPage) {
        if (window.scrollY > 660) {
            nav.style.background = "rgba(255, 255, 255)"; /* Solid background on scroll */
        } else {
            nav.style.background = "transparent"; /* Transparent when at top */
        }
    } else {
        nav.style.background = "rgb(255, 255, 255)";
    }
});
