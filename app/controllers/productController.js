const Product = require('../models/Product');
  
// Get all product based video
async function getAllProducts(req, res){
    const { videoId } = req.params;

    try {
        const products = await Product.find({ video_id: videoId });

        if(!products){
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(200).json(products);
        }
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function createProduct(req, res){}
async function deleteProduct(req, res){}


module.exports = { getAllProducts, createProduct, deleteProduct }