const Product = require('../models/product')
const CartItem = require('../models/cartItem')

module.exports = class ShoppingCart {

    constructor(cartItems=[]) {
        this.cartItems = cartItems;
    }

    addCartItem(productId) {
        let cartItem = this.cartItems.find(item => item.product.id == productId);
        if(cartItem) {
            cartItem.quantity += 1;
        } else {
            const product = Product.findById(productId);
            const cartItem = new CartItem(product, 1);
            this.cartItems.push(cartItem);
        }
    }

    removeCartItem(productId) {
        let index = this.cartItems.findIndex(item => item.product.id == productId);
        if(index > -1) {
            let foundCartItem = this.cartItems[index];
            if(foundCartItem.quantity <= 1) {

                // Remove the cartItem from the shopping cart
                this.cartItems.splice(index, 1);
            } else {

                // Reduce quantity of a product in the cart item
                foundCartItem.quantity -= 1;
            }

        }
    }

    removeCartItems() {
        this.cartItems = [];
    }
}