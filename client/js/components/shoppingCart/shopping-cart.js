import { ShoppingCartAPI } from "../../modules/shopping-cart-api.js";

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
                        <td colspan="5">Total: ${cartTotal}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        `;

        let self = this;
        document.getElementById('shopping-cart').innerHTML = shoppingCartItems;

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
    }
}