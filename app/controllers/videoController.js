const Video = require('../models/Video');

async function getAllVideo(req, res) {
    const reqTitle  = req.query.title;

    if(reqTitle && reqTitle.trim() !== '') {
        try {
            const videos = await Video.find({ title: { $regex: reqTitle, $options: 'i' } });
            
            if(!videos) {
                return res.status(404).json({ error: 'Videos not found' })
            } else {
                res.status(200).json({ videos: videos });
            }
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        try {
            const videos = await Video.find();
            res.status(200).json({ videos: videos });
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).json({ error: 'Internal server error' });
        }    
    }
}
  
async function getOneVideo(req, res){
    const { videoId } = req.params;

    try {
        const video = await Video.findById(videoId);
        
        if(!video) {
            return res.status(404).json({ error: 'Videos not found' })
        } else {
            res.status(200).json(video);
        }
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Optional
async function createVideo(req, res){}
async function deleteVideo(req, res){}

module.exports = { getAllVideo, getOneVideo, createVideo, deleteVideo };