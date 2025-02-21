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



/* =========== Shop Page =========== */
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    const header = document.querySelector(".header")
    const isShopPage = document.body.classList.contains('shop-page'); // Check if it's the shop page

    if (isShopPage) {
        if (window.scrollY > 60) {
            /* Solid background on scroll */
            nav.style.background = "hsl(160.13,100%,29.61%)";
            header.style.background = "hsl(160.13,100%,29.61%";
        } else {
            /* Transparent when at top */
            header.style.background = "transparent";
            nav.style.background = "transparent";
        }
    } else {
        nav.style.background = "hsl(160.13,100%,29.61%";
    }
});


// for searching the product
document.addEventListener('DOMContentLoaded', function() {
    // Enhane searching
    const searchInput = document.querySelector('.search-input');
    const noResult = document.querySelector('.no-result');
        
    // Create a dropdown container for searching results
    const searchDropdown = document.createElement('div');
    searchDropdown.className = 'search-dropdown';
    document.querySelector('.search-container').appendChild(searchDropdown);

    // Add necessary styles for dropdown
    const style = document.createElement('style');
    style.textContent = `
        .search-container {
            position: relative;
            transform: translateY(-80%);
        }

        .search-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 .25rem 6px rgba(0, 0, 0, 0.1);
            max-height: 300px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
        }

        .search-result-item {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: var(--small-font-size);
        }

        .search-result-item:hover {
            color: var(--secondary-color-1);
        }

        .search-result-item img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 0.5rem;
        }

        .search-result-info {
            flex: 1;
        }

        .search-result-info h4 {
            font-weight: var(--font-semi-bold);
        }

        .search-result-info p {
            margin: 0;
            font-size: var(--small-font-size);
            color: var(--grey-color);
        }

        .hide-section {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

    function getAllProducts() {
        // Combine both vegetables and fruits arrays
        return [...vegetables, ...fruits];
    }

    // Function to check if a product matches the search term exactly
    function isExactMatch(productTitle, searchTerm) {
        const productWords = productTitle.toLowerCase().split(' ');
        const searchWords = searchTerm.toLowerCase().split(' ');

        return searchWords.every(searchWord => 
            productWords.some(productWord => 
                productWord === searchWord ||
                productWord.startsWith(searchWord)
            )
        );
    }

    function createSearchResultHTML(product) {
        const defaultImage = "../assets/images/no-image/Image folder-amico.png";
        // Ensure image path is properly handled
        const imageSrc = product.image ? product.image : defaultImage;
        
        return `
            <div class="search-result-item" data-id="${product.id}" data-category="${product.category.toLowerCase()}">
                <img src="${imageSrc}" alt="${product.title}" onerror="this.src='${defaultImage}'">
                <div class="search-result-info">
                    <h4>${product.title}</h4>
                    <p>${product.category} - $${product.price}/${product.unit}</p>
                </div>
            </div>
        `;
    }

    function displaySearchResults(matchedProducts) {
        // Clear existing products
        renderVegetable.innerHTML = '';
        renderFruit.innerHTML = '';

        // Hide section initially
        renderVegetable.parentElement.classList.add('hide-section');
        renderFruit.parentElement.classList.add('hide-section');

        let hasVegetables = false;
        let hasFruits = false;

        // Render matched products in their respective section
        matchedProducts.forEach(product => {
            if (product.category.toLowerCase() == 'vegetables') {
                renderVegetable.innerHTML += CardComponent(product);
                hasVegetables = true;
            } else if (product.category.toLowerCase() === 'fruits') {
                renderFruit.innerHTML += CardComponent(product);
                hasFruits = true;
            }
        });


        // Show section that have products
        if(hasVegetables) renderVegetable.parentElement.classList.remove('hide-section');
        if(hasFruits) renderFruit.parentElement.classList.remove('hide-section');

        // Show/hide no results message
        noResult.style.display = matchedProducts.length === 0 ? 'block' : 'none';
    }


    function searchProducts(searchTerm) {
        searchTerm = searchTerm.toLowerCase().trim();
        const allProducts = getAllProducts();

        if(searchTerm === '') {
            searchDropdown.style.display = 'none';

            // Reset to show all product
            displaySearchResults(allProducts)
            // renderAllProducts();
            return;
        }

        // Filter products based on search term
        const matchedProducts = allProducts.filter(product =>
            isExactMatch(product.title, searchTerm)
        );

        if(matchedProducts.length > 0) {
            // Show dropdown with results
            searchDropdown.style.display = 'block';
            searchDropdown.innerHTML = matchedProducts.map(createSearchResultHTML).join('');
            noResult.style.display = 'none';
        } else {
            searchDropdown.style.display = 'none';
            noResult.style.display = 'block';
        }
    }

    // Handle search input event
    searchInput.addEventListener('focus', function() {
        this.classList.add('focused');
        if (this.value.trim() !== '') {
            searchProducts(this.value);
        }
    });

    // Handle blur event
    searchInput.addEventListener('blur', function(e) {
        // Delay hiding dropdown to allow for click handling
        setTimeout(() => {
            if (!this.value.trim()) {
                this.classList.remove('focused');
            }
            searchDropdown.style.display = 'none';
        }, 200);
    });

    // Handle input search event 
    searchInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.classList.add('focused');
        } else if (!this.matches(':focus')) {
            this.classList.remove('focused');
        }
        searchProducts(this.value);
    });

    // Handle clicking on search results
    searchDropdown.addEventListener('click', function(e) {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const productId = resultItem.dataset.id;
            const productCategory = resultItem.dataset.category;


            // Find product matching both ID and category
            const product = getAllProducts().find(p => p.id.toString() === productId && p.category.toLowerCase() === productCategory);

            if (product) {
                // Display only the clicked product
                displaySearchResults([product]);
                // Clear search and hide dropdown
                searchInput.value = '';
                searchDropdown.style.display = 'none';
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchDropdown.style.display = 'none';
            noResult.style.display = 'none';
        }
    });
});

/* ========== Enhance scrolling Not use yet ========== */
// document.addEventListener('DOMContentLoaded', function() {

//     // Scroll button
//     const container = document.querySelector('.card__lists');
//     const leftBtn = document.querySelector('.scroll-left');
//     const rightBtn = document.querySelector('.scroll-right');
//     const scrollAmount = container.offsetWidth / 2;


//     // Function to update button visibility
//     function updateScrollButton() {
//         if (container.scrollLeft > 0) {
//             leftBtn.classList.add('active');
//         } else {
//             left.classList.remove('active');
//         }

//         if (container.scrollLeft < (container.scrollWidth - clientWidth - 10)) {
//             rightBtn.classList.add('active');
//         } else {
//             rightBtn.classList.remove('active');
//         }
//     }

//     // Initail button state
//     updateScrollButton();

//     leftBtn.addEventListener('click', () => {
//         container.scrollBy({
//             left: -scrollAmount,
//             behavior: "smooth"
//         });
//     });

//     rightBtn.addEventListener('click', () => {
//         container.scrollBy({
//             left: scrollAmount,
//             behavior: "smooth"
//         });
//     });

//     // Update button on scroll
//     container.addEventListener('scroll', updateScrollButton);

//     // Update button on window resize
//     window.addEventListener('resize', updateScrollButton);



//     // Hide scroll button base on scroll position
//     container.addEventListener('scroll', () => {
//         leftBtn.style.opacity = container.scrollLeft > 0 ? '60%' : '100%';
//         rightBtn.style.opacity = container.scrollLeft < (container.scrollWidth - container.clientWidth) ? '60%' : '100%';
//     });
// });



/* =========== Card Render =========== */
import { CardComponent } from "./components/CardComponent.js";
import { vegetables } from "./data/Products/vegetables.js";
import { fruits } from "./data/Products/fruits.js";


document.addEventListener('DOMContentLoaded', function() {
    let renderVegetable = document.querySelector('#renderVegetable');
    let renderFruit = document.querySelector('#renderFruit');
    let filterOptions = document.querySelectorAll('.filter-link');
    
    
    // initial render of all products
    renderAllProducts();

    function renderAllProducts () {
        // clear exiting content
        renderVegetable.innerHTML = '';
        renderFruit.innerHTML = '';
        
        vegetables.map((vegetable) => {
            renderVegetable.innerHTML += CardComponent(vegetable);
        });

        fruits.map((fruit) => {
            renderFruit.innerHTML += CardComponent(fruit);
        });
    }

    
    // Function to show/hide section base on filter
    function filterProducts(category) {
        // Get all the parent sections
        const vegetableSection = document.querySelector('#renderVegetable').parentElement;
        const fruitSection = document.querySelector('#renderFruit').parentElement;

        switch(category.toLowerCase()) {
            case 'vegetables':
                vegetableSection.style.display = '';
                fruitSection.style.display = 'none';

                // Re-render vegetable
                renderVegetable.innerHTML = '';
                vegetables.map(vegetable => {
                    renderVegetable.innerHTML += CardComponent(vegetable);
                });
                break;

            case 'fruits':
                vegetableSection.style.display = 'none';
                fruitSection.style.display = '';

                // Re-render fruit
                renderFruit.innerHTML = '';
                fruits.map( fruit => {
                    renderFruit.innerHTML += CardComponent(fruit);
                });
                break;

            case 'organic':
                // Show both section but filter for organic products
                vegetableSection.style.display = '';
                fruitSection.style.display = '';

                // Filter and render organic products
                renderVegetable.innerHTML = '';
                renderFruit.innerHTML = '';

                const organicVegetables = vegetables.filter(item => item.organic === true);
                organicVegetables.map(vegetable => {
                    renderVegetable.innerHTML += CardComponent(vegetable);
                });

                const organicFruits = fruits.filter(item => item.organic === true);
                organicFruits.map(fruit => {
                    renderFruit.innerHTML += CardComponent(fruit);
                });
                break
            case 'all':
                // Show all products
                vegetableSection.style.display = '';
                fruitSection.style.display = '';
                renderAllProducts();
                break;

            default:
                renderAllProducts();
                break;
        }
    }

    filterOptions.forEach(option => {

        option.addEventListener('click', () => {
            filterOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            filterProducts(option.textContent.trim());
        });
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

