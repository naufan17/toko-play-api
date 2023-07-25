const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id: { 
        required: true,
        type: String
    },
    video_id: { 
        required: true,
        type: String
    },
    image: { 
        required: true,
        type: String
    },
    name: { 
        required: true,
        type: String
    },
    price: { 
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Product", productSchema);