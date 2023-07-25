const Comment = require('../models/Comment');

// Get all comments
async function getAllComments(req, res){
    const { videoId } = req.params;

    try {
        const comments = await Comment.find({ video_id: videoId });
        res.status(200).json(comments);
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Create comment
async function createComment(req, res){
}

// Optional
async function deleteComment(req, res){
}

module.exports = { getAllComments, createComment, deleteComment}