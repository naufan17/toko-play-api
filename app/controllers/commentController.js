const Comment = require('../models/Comment');

async function getAllComment(req, res){
    const { videoId } = req.params;
    const reqUsername = req.user;
    let usernameToPrioritize = "";

    try {
        const comments = await Comment.find({ video_id: videoId }, '_id username comment created_at');

        if(reqUsername) {
            usernameToPrioritize = reqUsername.username;
            const sortedComments = comments.sort((a, b) => {
                if (a.username === usernameToPrioritize && b.username !== usernameToPrioritize) {
                  return -1;
                } else if (a.username !== usernameToPrioritize && b.username === usernameToPrioritize) {
                  return 1;
                } else {
                  return 0;
                }
            });
    
            if(!sortedComments) {
                res.status(404).json({ error: 'Comment not found' });
            } else {
                res.status(200).json({ comments: sortedComments });
            }
        } else {
            if(!comments) {
                res.status(404).json({ error: 'Comment not found' });
            } else {
                res.status(200).json({ comments: comments });
            }
        }

    } catch (err) {
        console.error('Error fetching comment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createComment(req, res){
    const reqComment = req.body;
    const reqUsername = req.user;
    let username = "";

    if(!reqUsername) {
        username = "Anonymous";
    } else {
        username = reqUsername.username;
    }

    const comment = {
        video_id: reqComment.video_id,
        username: username,
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

async function deleteComment(req, res){
    const { commentId } = req.params;

    try {
        const comments = await Comment.findByIdAndRemove(commentId);

        if(!comments) {
            res.status(404).json({ error: 'Comment not found' });
        } else {
            res.status(201).json({ message: 'Comment deleted successfully' });
        }
    } catch (err) {
        console.error('Error fetching comment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = { getAllComment, createComment, deleteComment}