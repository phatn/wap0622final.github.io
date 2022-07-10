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
    }
}