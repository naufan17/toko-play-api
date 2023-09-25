const express = require('express');
const commentController = require('../controllers/commentController');
const authentication = require('../middleware/authentication');
const checkAuthentication = require('../middleware/checkAuthentication');

const router = express.Router();

router.get('/comments/:videoId', checkAuthentication, commentController.getAllComment)
router.post('/comments', checkAuthentication, commentController.createComment)
router.delete('/comments/:commentId', authentication, commentController.deleteComment)

  
module.exports = router;