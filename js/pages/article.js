import { CardArticleComponent } from "../../components/CardArticleComponent.js";
import { articleData } from "../../data/article/articleData.js";
    let renderArticle = document.querySelector('#renderArticle');

    articleData.map(data => (renderArticle.innerHTML += CardArticleComponent(data)));
    