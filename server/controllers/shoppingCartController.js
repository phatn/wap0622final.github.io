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
    if(shoppingCart.addCartItem(productId)) {
        res.status(201).json(Session.get(username));
    } else {
        res.status(201).json({error: "Can't add product into the shopping cart!"});
    }
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

exports.placeOrder = (req, res, next) => {
    const username = Util.getUsername(req);
    let shoppingCart = Session.get(username);
    if(shoppingCart) {
        let cartItems = shoppingCart.cartItems.filter(cartItem => cartItem.quantity > cartItem.product.stock);
        if(cartItems.length <= 0) {
            shoppingCart.cartItems.forEach(cartItem => {
                cartItem.product.stock -= cartItem.quantity;
            })

            shoppingCart.removeCartItems();
            res.status(201).json({
                cart: Session.get(username),
                products: Product.findAll(),
                message: 'Placed order successfully'
            });
        } else {
            res.status(201).json({error: 'Cannot place order, please reduce quantity of product!'});
        }
    }
}