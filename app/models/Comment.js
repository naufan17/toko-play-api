const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    video_id: { 
        required: true,
        type: String
    },
    username: { 
        required: true,
        type: String
    },
    comment: { 
        required: true,
        type: String
    },
    created_at: {  
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);