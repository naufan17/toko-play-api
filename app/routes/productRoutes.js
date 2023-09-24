const express = require('express');
const productController = require('../controllers/productController');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.get('/products/:videoId', productController.getAllProduct)

// Optional
router.post('/products', authentication, productController.createProduct)
router.delete('/products/:videoId', authentication, productController.deleteProduct)

  
module.exports = router;