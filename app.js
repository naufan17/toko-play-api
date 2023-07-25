require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./app/config/db');
const videoRoutes = require('./app/routes/videoRoutes');
const productRoutes = require('./app/routes/productRoutes');
const commmentRoutes = require('./app/routes/commentRoutes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', videoRoutes);
app.use('/api', productRoutes);
app.use('/api', commmentRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));