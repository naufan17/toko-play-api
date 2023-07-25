require('dotenv').config();

const mongoose = require('mongoose');
const URL = process.env.URL_DATABASE;

mongoose.connect(URL);

const database = mongoose.connection;

database.on('error', (err) => console.log(err));
database.once('connected', () => console.log('Connected to MongoDB'));

module.exports = { database };