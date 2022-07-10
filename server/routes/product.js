const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/', productController.save);
router.get('/', productController.getAll)

module.exports = router;