const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments/:videoId', commentController.getAllComment)
router.post('/comments', commentController.createComment)

// Optional
router.delete('/comments/:commentId', commentController.deleteComment)

  
module.exports = router;