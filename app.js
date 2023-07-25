require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const videoRoutes = require('./app/routes/videoRoutes');
const productRoutes = require('./app/routes/productRoutes');
const commmentRoutes = require('./app/routes/commentRoutes');

const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/toko-play';
mongoose.connect(URL);
const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
});

database.once('connected', () => {
  console.log('Connected to MongoDB');
});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', videoRoutes);
app.use('/api', productRoutes);
app.use('/api', commmentRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));