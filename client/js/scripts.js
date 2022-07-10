import { UserAPI } from './modules/user-api.js';
import { ProductAPI } from "./modules/product-api.js";
import {ShoppingCartAPI} from "./modules/shopping-cart-api.js";


import { ProductList } from "./components/product/product-list.js";
import { Nav } from "./components/nav/nav.js";
import { Login } from "./components/login/login.js";
import { Logout } from "./components/logout/logout.js";
import { ShoppingCart } from "./components/shoppingCart/shopping-cart.js";

import { Config } from "./modules/config.js";

function renderProductList() {
    ProductAPI.getAll().then(products => {
        let productList = new ProductList(products);
        productList.render();
    })
}


function renderShoppingCart() {
    ShoppingCartAPI.getAll().then(cart => {
        let shoppingCart = new ShoppingCart(cart);
        shoppingCart.render();
    })
}

window.onload = () => {
    let login = new Login();
    let logout = new Logout();
    let nav = new Nav();
    nav.render(login);

    let sessionId = sessionStorage.getItem(Config.ACCESS_TOKEN_NAME);

    if(sessionId) {
        nav.render(logout);
        renderProductList();
    }

    let btnLogin = document.getElementById('btn-login');
    if(btnLogin) {
        btnLogin.addEventListener('click', e => {
            e.preventDefault();
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            UserAPI.authenticate({username, password }).then(
                result => {
                    console.log(`accessToken is ${result.accessToken}`)
                    if(result.accessToken) {
                        console.log(result)
                        sessionStorage.setItem(Config.ACCESS_TOKEN_NAME, result.accessToken);
                        nav.render(logout, result);
                        renderProductList();
                        renderShoppingCart();
                    } else {
                        alert('Login failed');
                    }
                }
            );

        })
    }

}