export const CardComponent = (product) => {
    return `
        <div class="card" data-title = "${product.title.toLowerCase()}" data-category = "${product.category.toLowerCase()}">
            <img src="${product?.image || "../assets/images/no-image/Image folder-amico.png"}" alt="product image" />
            <div class="card_info">
                <h3>${product.title || "No product"}</h3>
                <div class="card_info_price">
                    <p class="card_price">$${product?.price || "Unavailable"}/${product?.unit === "kg" ? "kg" : product.weightPerPacket}</p>
                    <p class="card_buy">
                        <i class="fa-solid fa-cart-plus"></i>
                    </p>
                </div>
            </div>
        </div>
    `;
};