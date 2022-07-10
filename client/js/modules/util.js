import { Config } from "./config.js";
import { ProductAPI } from "./product-api.js";
import { ProductList } from "../components/product/product-list.js";
import { ShoppingCartAPI}  from "./shopping-cart-api.js";
import { ShoppingCart } from "../components/shoppingCart/shopping-cart.js";

export class Util {

    static getAccessToken = () => sessionStorage.getItem(Config.ACCESS_TOKEN_NAME)

    static getSessionUsername() {
        let accessToken = this.getAccessToken();
        if(accessToken && accessToken.split('_').length > 0) {
            return accessToken.split('_')[0];;
        }

        return '';
    }

    static renderProductList() {
        ProductAPI.getAll().then(products => {
            let productList = new ProductList(products);
            productList.render();
        })
    }

    static renderShoppingCart() {
        ShoppingCartAPI.getAll().then(cart => {
            let shoppingCart = new ShoppingCart(cart);
            shoppingCart.render();
        })
    }

}