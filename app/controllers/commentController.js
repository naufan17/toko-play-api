const Comment = require('../models/Comment');

async function getAllComment(req, res){
    const { videoId } = req.params;

    try {
        const comments = await Comment.find({ video_id: videoId }, '_id username comment created_at');

        if(!comments) {
            res.status(404).header("Access-Control-Allow-Origin", "*").json({ error: 'Comment not found' });
        } else {
            res.status(200).header("Access-Control-Allow-Origin", "*").json({ comments: comments });
        }
    } catch (err) {
        console.error('Error fetching comment:', err);
        res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
    }
}

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
        res.status(201).header("Access-Control-Allow-Origin", "*").json({ message: 'Comment created successfully' });
    } catch (err) {
        console.error('Error inserting comment:', err);
        res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
    }
}

// Optional
async function deleteComment(req, res){
}

module.exports = { getAllComment, createComment, deleteComment}