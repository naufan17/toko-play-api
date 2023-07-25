const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products/:videoId', productController.getAllProducts)

// Optional
router.post('/products', productController.createProduct)
router.delete('/products/:videoId', productController.createProduct)

  
module.exports = router;