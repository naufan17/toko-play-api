const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/toko-play';

mongoose.connect(URL);
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = { database };