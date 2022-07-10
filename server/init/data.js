const Product = require('../models/product');
const User = require('../models/user');

module.exports = class Data {

    static createProducts() {
        let products = Product.findAll();
        products.push(new Product(1, 'Node.js', 9.99, '/assets/img/products/nodejs.png', 8));
        products.push(new Product(3, 'React', 19.99, '/assets/img/products/reactjs.png', 5));
        products.push(new Product(2, 'Angular', 29.99, '/assets/img/products/angular.png', 13));
        products.push(new Product(4, 'Java', 39.99, '/assets/img/products/java.png', 18));
    }

    static createUsers() {
        let users = User.findAll();
        users.push(new User('tina', '100', 'Tina'));
        users.push(new User('phat', '101', 'Phat'));
        users.push(new User('john', '102', 'John'));
        users.push(new User('tom', '103', 'Tom'));
    }

    static initData() {
        this.createProducts();
        this.createUsers();
    }
}