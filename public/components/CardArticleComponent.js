export const CardArticleComponent = (data) => {
    return `
        <div class="card_article">
            <img src="${data?.image || "../assets/images/no-image/Image folder-amico.png"}" alt=${data.name}/>
            <div class="card_article-info">
                <h3>${data?.name || "Not available yet"}</h3>
                <p>${data?.short_description || " "}</p>
                <span>${data.created_at}</span>
            </div>
        </div>
    `;
}