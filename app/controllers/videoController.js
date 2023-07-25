const Video = require('../models/Video');

// Get all videos
async function getAllVideos(req, res) {
    const reqTitle  = req.query.title;

    if(reqTitle && reqTitle.trim() !== '') {
        try {
            const videos = await Video.find({ title: { $regex: reqTitle, $options: 'i' } });
            res.status(200).json(videos);
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        try {
            const videos = await Video.find();
            res.status(200).json(videos);
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).json({ error: 'Internal server error' });
        }    
    }
}
  
// Get videos by id
async function getOneVideos(req, res){
    const { videoId } = req.params;

    try {
        const videos = await Video.find({ video_id: videoId });
        res.status(200).json(videos);
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function playVideos(req, res){}
async function createVideo(req, res){}
async function deleteVideo(req, res){}

module.exports = { getAllVideos, getOneVideos, playVideos, createVideo, deleteVideo };