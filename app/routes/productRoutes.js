const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getAllProducts)
router.get('/products/:video_id', productController.getVideoProducts)

// Optional
router.get('/products/search', productController.getSearchProducts)
router.post('/product', productController.createProduct)
  
module.exports = router;