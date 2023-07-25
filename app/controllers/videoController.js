const Video = require('../models/Video');

// Get all videos
async function getAllVideos(req, res) {
    const reqTitle  = req.query.title;

    if(reqTitle && reqTitle.trim() !== '') {
        try {
            const videos = await Video.find({ title: { $regex: reqTitle, $options: 'i' } });
            
            if(!videos) {
                return res.status(404).json({ error: 'Videos not found' })
            } else {
                res.status(200).json(videos);
            }
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
        const videos = await Video.findById(videoId);
        
        if(!videos) {
            return res.status(404).json({ error: 'Videos not found' })
        } else {
            res.status(200).json(videos);
        }
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function playVideos(req, res){
    const { videoId } = req.params;

    try {
        const video = await Video.findById(videoId);

        if(!video){
            res.status(404).json({ error: "Video not found"});
        } else {
            video.views++;
            const updatedVideo = await video.save();
            res.status(200).json({ message: 'Video successfully to play' });
        }
    } catch (err) {
        console.error('Error play video:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function createVideo(req, res){}
async function deleteVideo(req, res){}

module.exports = { getAllVideos, getOneVideos, playVideos, createVideo, deleteVideo };