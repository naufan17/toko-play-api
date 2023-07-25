const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getAllVideos)
router.get('/videos/:videoId', videoController.getOneVideos)

// Optional
router.get('/videos/play/:videoId', videoController.playVideos)
router.post('/video', videoController.createVideo)
router.delete('/video/:videoId', videoController.deleteVideo)

  
module.exports = router;