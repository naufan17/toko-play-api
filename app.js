require('dotenv').config();

const express = require('express');
const cors = require('cors');
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

app.use('/api', cors(), videoRoutes);
app.use('/api', cors(), productRoutes);
app.use('/api', cors(), commmentRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));