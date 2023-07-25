const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments/:videoId', commentController.getAllComments)
router.post('/comment', commentController.createComment)

// Optional
router.delete('/comment/:commentId', commentController.deleteComment)

  
module.exports = router;