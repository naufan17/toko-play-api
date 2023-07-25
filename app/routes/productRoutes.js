const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products/:videoId', productController.getAllProducts)

// Optional
router.post('/product', productController.createProduct)
router.delete('/product/:videoId', productController.createProduct)

  
module.exports = router;