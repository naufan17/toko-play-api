const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments', commentController.getAllComments)
router.get('/comments/:video_id', commentController.getVideoComments)
router.post('/comment', commentController.createComment)

// Optional
router.delete('/comment/:comment_id', commentController.deleteComment)

  
module.exports = router;