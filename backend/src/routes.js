const express = require('express');
const multer = require('multer');
const uploadConf = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConf);

routes.post('/users', SessionController.store);

routes.get('/spots',SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings',BookingController.store);

module.exports = routes;