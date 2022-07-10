import { ShoppingCartAPI } from "../../modules/shopping-cart-api.js";
import {ProductList} from "../product/product-list.js";

export class ShoppingCart {

    constructor(cart) {
        this.cart = cart;
    }

    render() {
        let rows = '';
        let cartTotal = 0;
        if(this.cart) {
            this.cart.cartItems.forEach((cartItem, index) => {
                let total = cartItem.product.price * cartItem.quantity;
                cartTotal += total;
                rows += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${cartItem.product.name}</td>
                    <td>${cartItem.product.price}</td>
                    <td>${total}</td>
                    <td style="vertical-align: middle">
                        <span><i class="bi-dash-circle-fill btn-cart-item btn-cart-minus" data-product-id="${cartItem.product.id}"></i></span>
                        <input class="cart-item-quantity" type="text" value="${cartItem.quantity}" />
                        <span><i class="bi-plus-circle-fill btn-cart-item btn-cart-plus" data-product-id="${cartItem.product.id}"></i></span>
                    </td>
                </tr>
            `;
            });
        }


        let shoppingCartItems = `
            <div class="shopping-cart shadow-lg">
                <div class="lead mb-0">Your Shopping Cart</div>
                <div class="mt-4"></div>
                <div>There is no items in your shopping cart!</div>
            </div>
        `;

        if(this.cart && this.cart.cartItems && this.cart.cartItems.length > 0) {
            shoppingCartItems = `
            <div class="shopping-cart shadow-lg">
                <div class="lead mb-0">Your Shopping Cart</div>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${rows}
                        <tr>
                            <td colspan="5" colspan="2"><div class="cart-total">Total: ${cartTotal}</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="place-order"><button id="btn-place-order" class="btn btn-primary">Place Order</button></div>
                </div>
            </div>
        `;
        }

        let self = this;
        let shoppingCartElement = document.getElementById('shopping-cart');
        shoppingCartElement.innerHTML = shoppingCartItems;

        let buttonAddCarts = document.getElementsByClassName('btn-cart-plus');

        Array.prototype.forEach.call(buttonAddCarts, function(buttonAddCart) {
            buttonAddCart.addEventListener('click', function() {
                ShoppingCartAPI.addCartItem(this.dataset.productId).then(cart => {
                    self.cart = cart;
                    self.render();
                });
            })
        });

        let buttonRemoveCarts = document.getElementsByClassName('btn-cart-minus');

        Array.prototype.forEach.call(buttonRemoveCarts, function(buttonRemoveCart) {
            buttonRemoveCart.addEventListener('click', function() {
                ShoppingCartAPI.removeCartItem(this.dataset.productId).then(cart => {
                    self.cart = cart;
                    self.render();
                });
            })
        });

        let btnPlaceOrder = document.getElementById('btn-place-order');
        btnPlaceOrder.addEventListener('click', function() {
            ShoppingCartAPI.placeOrder().then(data => {
                self.cart = data.cart;
                self.render();

                let productList = new ProductList(data.products);
                productList.render();

            });
        });
    }
}