window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  const header = document.querySelector(".header");
  const isArticlePage = document.body.classList.contains("article-page"); // Check if it's the article page

  if (isArticlePage) {
    if (window.scrollY > 60) {
      /* Solid background on scroll */
      nav.style.background = "hsl(160.13,100%,29.61%)";
      header.style.background = "hsl(160.13,100%,29.61%)";
    } else {
      /* Transparent when at top */
      header.style.background = "transparent";
      nav.style.background = "transparent";
    }
  } else {
    // nav.style.background = "hsl(160.13,100%,29.61%)";
    nav.style.background = "transparent";
  }
});

// import { CardArticleComponent } from "/components/CardArticleComponent.js";
import { CardArticleComponent } from "/components/CardArticleComponent.js";

const renderArticle = document.querySelector("#renderArticle");

fetch("/data/article/articleData.json")
  .then((res) => res.json())
  .then((articleData) => {
    articleData.forEach((data) => {
      renderArticle.innerHTML += CardArticleComponent(data);
    });
  })
  .catch((error) => {
    console.error("Error loading article data:", error);
  });

// This is the base code of using JS module import
// import { CardArticleComponent } from "../../components/CardArticleComponent.js";
// import { articleData } from "../../data/article/articleData.js";

// let renderArticle = document.querySelector('#renderArticle');
// articleData.map(data => (renderArticle.innerHTML += CardArticleComponent(data)));
