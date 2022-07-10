module.exports = class Session {

    static map = new Map();

    static set(username, shoppingCart) {
        this.map.set(username, shoppingCart);
    }

    static get(username) {
        return this.map.get(username);
    }

}