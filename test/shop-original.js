/* =========== Card Render =========== */
// This is for scenario deploy on Vercel support for linking the static site
import { CardComponent } from "/components/CardComponent.js";
import { vegetables } from "/data/products/vegetables.js";
import { fruits } from "/data/products/fruits.js";

// This is for import from it location (we called [JS module import])
// import { CardComponent } from "../../components/CardComponent.js";
// import { vegetables } from "../../data/products/vegetables.js";
// import { fruits } from "../../data/products/fruits.js";

document.addEventListener("DOMContentLoaded", function () {
  let renderVegetable = document.querySelector("#renderVegetable");
  let renderFruit = document.querySelector("#renderFruit");
  let filterOptions = document.querySelectorAll(".filter-link");

  // initial render of all products
  renderAllProducts();

  function renderAllProducts() {
    // clear exiting content
    renderVegetable.innerHTML = "";
    renderFruit.innerHTML = "";

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
    const vegetableSection =
      document.querySelector("#renderVegetable").parentElement;
    const fruitSection = document.querySelector("#renderFruit").parentElement;

    switch (category.toLowerCase()) {
      case "vegetables":
        vegetableSection.style.display = "";
        fruitSection.style.display = "none";

        // Re-render vegetable
        renderVegetable.innerHTML = "";
        vegetables.map((vegetable) => {
          renderVegetable.innerHTML += CardComponent(vegetable);
        });
        break;

      case "fruits":
        vegetableSection.style.display = "none";
        fruitSection.style.display = "";

        // Re-render fruit
        renderFruit.innerHTML = "";
        fruits.map((fruit) => {
          renderFruit.innerHTML += CardComponent(fruit);
        });
        break;

      case "organic":
        // Show both section but filter for organic products
        vegetableSection.style.display = "";
        fruitSection.style.display = "";

        // Filter and render organic products
        renderVegetable.innerHTML = "";
        renderFruit.innerHTML = "";

        const organicVegetables = vegetables.filter(
          (item) => item.organic === true
        );
        organicVegetables.map((vegetable) => {
          renderVegetable.innerHTML += CardComponent(vegetable);
        });

        const organicFruits = fruits.filter((item) => item.organic === true);
        organicFruits.map((fruit) => {
          renderFruit.innerHTML += CardComponent(fruit);
        });
        break;
      case "all":
        // Show all products
        vegetableSection.style.display = "";
        fruitSection.style.display = "";
        renderAllProducts();
        break;

      default:
        renderAllProducts();
        break;
    }
  }

  filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
      filterOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
      filterProducts(option.textContent.trim());
    });
  });
});
