const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const router = express.Router();

router.get('/', shoppingCartController.getCart)
router.post('/add-cart-item/:productId', shoppingCartController.addCartItem)
router.post('/remove-cart-item/:productId', shoppingCartController.removeCartItem)
router.post('/place-order', shoppingCartController.placeOrder)

module.exports = router;