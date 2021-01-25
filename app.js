var express = require('express');
			var myapp = new express();
			var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


			
			// ejs
		myapp.set('views', __dirname + '/views');
		myapp.set('view engine', 'ejs');

		// controllers require
var authController = require('./controllers/authController');
var studentController = require('./controllers/studentController');
var teacherController = require('./controllers/teacherController');
var adminController = require('./controllers/adminController');
var courseController = require('./controllers/courseController');
var coursetypeController = require('./controllers/coursetypeController');
var ratingController = require('./controllers/ratingController');
var videoController = require('./controllers/videoController');

			
			// set port
		myapp.listen(3000);
		module.exports = myapp;