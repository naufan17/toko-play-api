const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
        type: String
    }
});

module.exports = mongoose.model("Product", productSchema);