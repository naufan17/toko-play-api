require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.URL_DATABASE;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.error.bind(console, 'Connection error:');
});

db.once('open', () => {
  console.log('Connected to Database');
}); 