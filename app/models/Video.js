const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    video_id: { 
        required: true,
        type: String
    },
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
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Video", videoSchema);