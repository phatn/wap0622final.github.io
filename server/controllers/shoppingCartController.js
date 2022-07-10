const Session = require('../models/session');
const ShoppingCart = require('../models/shoppingCart')
const Product = require('../models/product')
const Util = require('../util/Util')

exports.getCart = (req, res, next) => {
    res.status(200).json(Session.get(Util.getUsername(req)));
}


exports.addCart = (req, res, next) => {
    res.status(201).json(Session.set(req.body.username, req.body.cartItem));
}

exports.addCartItem = (req, res, next) => {
    const productId = req.params.productId;
    const username = Util.getUsername(req);
    let shoppingCart = Session.get(username);
    if(!shoppingCart) {
        shoppingCart = new ShoppingCart();
        Session.set(username, shoppingCart);
    }
    shoppingCart.addCartItem(productId);
    res.status(201).json(Session.get(username));
}

exports.removeCartItem = (req, res, next) => {
    const productId = req.params.productId;
    const username = Util.getUsername(req);
    let shoppingCart = Session.get(username);
    if(shoppingCart) {
        shoppingCart.removeCartItem(productId);
        res.status(201).json(Session.get(username));
    }
}