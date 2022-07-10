import { Header } from "./components/header/header.js";
import { Nav } from "./components/nav/nav.js";
import { Login } from "./components/login/login.js";
import { Logout } from "./components/logout/logout.js";
import { Util } from "./modules/util.js";

window.onload = () => {
    let sessionId = Util.getAccessToken();
    if(sessionId) {
        new Nav().render(new Logout(), {
            name: Util.toTitleCase(Util.getSessionUsername())
        });
        new Header().remove();
        Util.renderProductList();
        Util.renderShoppingCart();
    } else {
        new Nav().render(new Login());
        new Header().render();
    }
}