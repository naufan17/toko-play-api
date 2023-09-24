const express = require('express');
const videoController = require('../controllers/videoController');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.get('/videos', videoController.getAllVideo)
router.get('/videos/:videoId', videoController.getOneVideo)

// Optional
router.post('/videos', authentication, videoController.createVideo)
router.delete('/videos/:videoId', authentication, videoController.deleteVideo)

  
module.exports = router;