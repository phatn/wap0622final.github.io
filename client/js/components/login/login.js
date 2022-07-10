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
                    <input id="username" type="text" name="username" class="required" autocomplete="off">
                </div>
                <div class="form-item">
                    <label for="password">Password: </label>
                    <input id="password" type="password" name="password" class="required" autocomplete="off">
                </div>
            </div>
            <button id="btn-login" class="btn btn-primary btn-login">Login</button>
        `;
        document.title = 'MyStore - Login';
        document.getElementById('login').innerHTML = login;
        document.getElementById('username').focus();

        let btnLogin = document.getElementById('btn-login');
        btnLogin.addEventListener('click', e => {
            e.preventDefault();
            if(Login.validate()) {
                Login.authenticate();
            }
        })

        let passwordElement = document.getElementById('password');
        passwordElement.addEventListener('keypress', function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if(Login.validate()) {
                    Login.authenticate();
                }
            }
        })
    }

    static authenticate() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        UserAPI.authenticate({username, password }).then(
            result => {
                if(result.accessToken) {
                    Util.setAccessToken(result.accessToken);
                    new Nav().render(new Logout(), result);
                    new Header().remove();
                    Util.renderProductList();
                    Util.renderShoppingCart();

                } else {
                    new ErrorAlert().render(result.errorAuth);
                }
            }
        );
    }

    static validate() {
        const requiredFields = document.querySelectorAll('#login input[class~="required"]');
        let valid = true;
        for(let i = 0; i < requiredFields.length; i++) {
            let input = requiredFields[i];
            if(input.value === '') {
                input.classList.add("error");
                valid =  false;
            } else {
                input.classList.remove("error");
            }
        }
        return valid;
    }
}