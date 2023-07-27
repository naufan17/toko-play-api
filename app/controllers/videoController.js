const Video = require('../models/Video');

async function getAllVideo(req, res) {
    const reqTitle  = req.query.title;

    if(reqTitle && reqTitle.trim() !== '') {
        try {
            const videos = await Video.find({ title: { $regex: reqTitle, $options: 'i' } });
            
            if(!videos) {
                return res.status(404).header("Access-Control-Allow-Origin", "*").json({ error: 'Videos not found' })
            } else {
                res.status(200).header("Access-Control-Allow-Origin", "*").json({ videos: videos });
            }
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
        }
    } else {
        try {
            const videos = await Video.find();
            res.status(200).header("Access-Control-Allow-Origin", "*").json({ videos: videos });
        } catch (err) {
            console.error('Error fetching videos:', err);
            res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
        }    
    }
}
  
async function getOneVideo(req, res){
    const { videoId } = req.params;

    try {
        const video = await Video.findById(videoId);
        
        if(!video) {
            return res.status(404).header("Access-Control-Allow-Origin", "*").json({ error: 'Videos not found' })
        } else {
            res.status(200).header("Access-Control-Allow-Origin", "*").json(video);
        }
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
    }
}

async function playVideo(req, res){
    const { videoId } = req.params;

    try {
        const video = await Video.findById(videoId);

        if(!video){
            res.status(404).header("Access-Control-Allow-Origin", "*").json({ error: "Video not found"});
        } else {
            video.views++;
            const updatedVideo = await video.save();
            res.status(200).header("Access-Control-Allow-Origin", "*").json({ message: 'Video successfully to play' });
        }
    } catch (err) {
        console.error('Error play video:', err);
        res.status(500).header("Access-Control-Allow-Origin", "*").json({ error: 'Internal server error' });
    }
}

// Optional
async function createVideo(req, res){}
async function deleteVideo(req, res){}

module.exports = { getAllVideo, getOneVideo, playVideo, createVideo, deleteVideo };