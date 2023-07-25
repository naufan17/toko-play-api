const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getAllVideos)
router.get('/videos/:videoId', videoController.getOneVideos)
router.put('/video/:videoId/play', videoController.playVideos)

// Optional
router.post('/video', videoController.createVideo)
router.delete('/video/:videoId', videoController.deleteVideo)

  
module.exports = router;