const Comment = require('../models/Comment');

// Get all comments
async function getAllComments(req, res){
    const { videoId } = req.params;

    try {
        const comments = await Comment.find({ video_id: videoId });
        res.status(200).json(comments);
    } catch (err) {
        console.error('Error fetching comment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Create comment
async function createComment(req, res){
    const reqComment = req.body;

    const comment = {
        video_id: reqComment.video_id,
        username: reqComment.username,
        comment: reqComment.comment
    }

    try {
        const newComment = new Comment(comment)
        const saveComment = await newComment.save();
        res.status(201).json({ message: 'Comment created successfully' });
    } catch (err) {
        console.error('Error inserting comment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function deleteComment(req, res){
}

module.exports = { getAllComments, createComment, deleteComment}