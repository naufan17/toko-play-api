const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getAllVideo)
router.get('/videos/:videoId', videoController.getOneVideo)
router.put('/videos/:videoId/play', videoController.playVideo)

// Optional
router.post('/videos', videoController.createVideo)
router.delete('/videos/:videoId', videoController.deleteVideo)

  
module.exports = router;