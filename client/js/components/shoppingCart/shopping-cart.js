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
                        <span><i class="bi-dash-circle-fill btn-cart btn-cart-minus"></i></span>
                        <input class="cart-item-quantity" type="text" value="${cartItem.quantity}" />
                        <span><i class="bi-plus-circle-fill btn-cart btn-cart-plus"></i></span>
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

        document.getElementById('shopping-cart').innerHTML = shoppingCartItems;
    }
}