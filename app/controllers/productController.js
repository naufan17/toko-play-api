const Product = require('../models/Product');
  
async function getAllProduct(req, res){
    const { videoId } = req.params;

    try {
        const products = await Product.find({ video_id: videoId }, '_id product_link image name price');

        if(!products){
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(200).json({ products: products });
        }
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function createProduct(req, res){}
async function deleteProduct(req, res){}


module.exports = { getAllProduct, createProduct, deleteProduct }