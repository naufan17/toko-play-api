const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment_id: { 
        required: true,
        type: String
    },
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
        required: true,
        type: Date
    }
});

module.exports = mongoose.model("Comment", commentSchema);