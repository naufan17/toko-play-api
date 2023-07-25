const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products/:videoId', productController.getAllProduct)

// Optional
router.post('/products', productController.createProduct)
router.delete('/products/:videoId', productController.deleteProduct)

  
module.exports = router;