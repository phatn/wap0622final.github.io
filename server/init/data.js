const Product = require('../models/product');
const User = require('../models/user');

module.exports = class Data {

    static createProducts() {
        let products = Product.findAll();
        products.push(new Product(1, 'Nodejs', 2000, '/assets/img/products/nodejs.png', 10));
        products.push(new Product(2, 'Angular', 3000, '/assets/img/products/angular.png', 20));
        products.push(new Product(3, 'Reactjs', 4000, '/assets/img/products/reactjs.png', 15));
        products.push(new Product(4, 'Java', 1000, '/assets/img/products/java.png', 18));
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