const Videos = require('../models/Video');

// Get all videos
async function getAllVideos(req, res) {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (err) {
        console.error('Error fetching items:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
  
// Get videos by id
async function getOneVideos(req, res){
}

// Get videos search by title
async function getSearchVideos(req, res){
}

// Optional
async function createVideo(req, res){}
async function deleteVideo(req, res){}

module.exports = { getAllVideos, getOneVideos, getSearchVideos, createVideo, deleteVideo  };