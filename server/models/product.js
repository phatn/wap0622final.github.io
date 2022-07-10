let products = [];
let id = 0;
module.exports = class Product {

    constructor(id, name, price, image, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    save() {
        this.id = ++id;
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(p => p.id == this.id);
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static findAll() {
        return products;
    }

    static findById(productId) {
        const index = products.findIndex(p => p.id == productId);
        console.log(index);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(productId) {
        const index = products.findIndex(p => p.id == productId);
        if (index > -1) {
            products = products.filter(p => p.id != productId);
        } else {
            throw new Error('NOT Found');
        }
    }

}