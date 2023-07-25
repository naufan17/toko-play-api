const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getAllVideos)
router.get('/videos/:videoId', videoController.getOneVideos)
router.put('/videos/:videoId/play', videoController.playVideos)

// Optional
router.post('/videos', videoController.createVideo)
router.delete('/videos/:videoId', videoController.deleteVideo)

  
module.exports = router;