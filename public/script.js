document.getElementById("load-btn").addEventListener("click", async () => {
    const response = await fetch("/products");
    const products = await response.json();
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" width="100" height="100">
            <p><strong>${product.title}</strong></p>
            <p>Price: $${product.price}</p>
            <p>Discount: ${product.discount}%</p>
            <p>Final Price: $${product.finalPrice}</p>
        `;
        productList.appendChild(productItem);
    });
});
// I used In class notes & previous class notes as a reference to create this code. 