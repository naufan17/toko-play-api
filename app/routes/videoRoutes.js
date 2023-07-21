const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/videos', videoController.getAllVideos)
router.get('/videos/:video_id', videoController.getOneVideos)
router.get('/videos/search', videoController.getSearchVideos)

// Optional
router.post('/video', videoController.createVideo)
router.delete('/video/:id', videoController.deleteVideo)

  
module.exports = router;