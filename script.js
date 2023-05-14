// Initialize an empty cart array
let cart = [];

// Get the "Add to Cart" button
const addToCartButton = document.getElementById("add-to-cart-btn");

// Add a click event listener to the button
addToCartButton.addEventListener("click", function() {
	// Add the product to the cart array
	cart.push({
		name: "My Product",
		price: 99.99
	});
	// Alert the user that the product has been added to the cart
	alert("Product added to cart!");
});
