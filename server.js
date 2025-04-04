const express = require("express");
const axios = require("axios");

const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS & JavaScript)
app.use('/public', express.static('public'));

// Home route (renders index.ejs)
app.get("/", (req, res) => {
    res.render("index");
});

// API route to fetch product data from DummyJSON
app.get("/products", async (req, res) => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        
        // Extract required product details
        const products = response.data.products.map(product => ({
            title: product.title,
            price: product.price.toFixed(2),
            discount: product.discountPercentage.toFixed(2),
            finalPrice: (product.price * (1 - product.discountPercentage / 100)).toFixed(2),
            thumbnail: product.thumbnail
        }));

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Start server on port 8080
app.listen(8080, () => {
    console.log("Application server is running on http://localhost:8080");
});

// I used In classs notes and AI as a reference to create this code. 