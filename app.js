const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDb = require('./db/connection');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cookieParser = require("cookie-parser");

//================ ROUTES REQUIRE ================
const authRoutes = require('./routes/api/auth');
const newsRoutes = require('./routes/api/news');
const petsRoutes = require('./routes/api/pets');
const noticesRoutes = require('./routes/api/notices');
const servicesRoutes = require('./routes/api/services');
const userPetsRoutes = require('./routes/api/userPets');
//================ END ROUTES REQUIRE ================

const configPath = path.join(__dirname, '.env');
require('dotenv').config({
  path: configPath,
});

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//================ ROUTES ================
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/pets', petsRoutes);
app.use('/api/notices', noticesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/user-pets', userPetsRoutes);
//================ END ROUTES ================

connectDb();

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
