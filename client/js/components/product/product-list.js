import { Config } from "../../modules/config.js";
import { ShoppingCartAPI } from "../../modules/shopping-cart-api.js";
import { ShoppingCart } from "../shoppingCart/shopping-cart.js";


export class ProductList {

    constructor(products) {
        this.products = products;
    }

    render() {
        let rows = '';
        this.products.forEach((prod, index) => {
            rows += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${prod.name}</td>
                    <td>${prod.price}</td>
                    <td><img class="prod-image" src="${Config.SERVER_URL}${prod.image}"/></td>
                    <td>${prod.stock}</td>
                    <td><i class="bi-cart-plus cart-icon btn-cart" data-product-id="${prod.id}"></i></td>
                </tr>
            `;
        });

        let productList = `
            <div class="lead mb-0">Product List</div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                ${rows}
                </tbody>
            </table>
        `;

        document.getElementById('product-list').innerHTML = productList;
        let buttonCarts = document.getElementsByClassName('btn-cart');

        Array.prototype.forEach.call(buttonCarts, function(buttonCart) {
            buttonCart.addEventListener('click', function(e)  {
                ShoppingCartAPI.addCartItem(this.dataset.productId).then(cart => {
                    let shoppingCart = new ShoppingCart(cart);
                    shoppingCart.render();
                });
            })
        });
    }
}