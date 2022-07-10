const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const router = express.Router();

router.get('/', shoppingCartController.getCart)
router.post('/add-cart-item/:productId', shoppingCartController.addCartItem)
router.post('/remove-cart-item', shoppingCartController.removeCartItem)

module.exports = router;