const Product = require('../models/product');

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.findAll());
}

exports.save = (req, res, next) => {
    const prod = req.body;
    const savedProd = new Product(null, prod.name, prod.price, prod.image, prod.stock).save();
    res.status(201).json(savedProd);
}
