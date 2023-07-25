const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    url_video: { 
        required: true,
        type: String
    },
    thumbnail: { 
        required: true,
        type: String
    },
    title: { 
        required: true,
        type: String
    },
    views: { 
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Video", videoSchema);