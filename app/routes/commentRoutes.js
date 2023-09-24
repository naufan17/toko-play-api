const express = require('express');
const commentController = require('../controllers/commentController');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.get('/comments/:videoId', commentController.getAllComment)
router.post('/comments', commentController.createComment)

// Optional
router.delete('/comments/:commentId', authentication, commentController.deleteComment)

  
module.exports = router;