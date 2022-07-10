import { UserAPI } from "../../modules/user-api.js";
import { ErrorAlert } from "../alert/error-alert.js";
import { Header } from "../header/header.js";
import { Util } from "../../modules/util.js";
import { Nav } from "../nav/nav.js";
import { Logout } from "../logout/logout.js";


export class Login {

    render() {
        let login = `
            <div>
                <div class="form-item">
                    <label for="username">Username: </label>
                    <input id="username" type="text" name="username" autocomplete="off">
                </div>
                <div class="form-item">
                    <label for="password">Password: </label>
                    <input id="password" type="password" name="password" autocomplete="off">
                </div>
            </div>
            <button id="btn-login" class="btn btn-primary btn-login">Login</button>
        `;

        document.getElementById('login').innerHTML = login;
        document.getElementById('username').focus();

        let btnLogin = document.getElementById('btn-login');
        btnLogin.addEventListener('click', e => {
            e.preventDefault();
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            UserAPI.authenticate({username, password }).then(
                result => {
                    console.log(`accessToken is ${result.accessToken}`)
                    if(result.accessToken) {
                        Util.setAccessToken(result.accessToken);
                        new Nav().render(new Logout(), result);
                        new Header().remove();
                        Util.renderProductList();
                        Util.renderShoppingCart();

                    } else {
                        new ErrorAlert().render('Login failed');
                    }
                }
            );

        })
    }
}