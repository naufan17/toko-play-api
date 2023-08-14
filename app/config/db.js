require('dotenv').config();

const mongoose = require('mongoose');
const URL = process.env.URL_DATABASE;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;

database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
  
database.once('open', () => {
    console.log('Connected to MongoDB database.');
});
  
database.on('disconnected', () => {
    console.log('Disconnected from MongoDB database.');
});
  
database.on('reconnected', () => {
    console.log('Reconnected to MongoDB database.');
});

module.exports = { database };