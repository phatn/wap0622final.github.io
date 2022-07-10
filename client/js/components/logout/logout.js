export class Logout {

    render(user) {
        let logout = `
             <lable style="color: #fff">Welcome, ${user.name}</lable>
             <button class="btn btn-primary btn-logout">Logout</button>
        `;
        document.getElementById('login').innerHTML = logout;
    }
}