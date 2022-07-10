let users = [];

module.exports = class User {

    constructor(username, password, name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    static findAll() {
        return users;
    }

}