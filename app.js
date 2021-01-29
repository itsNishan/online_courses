var express = require('express');
var myapp = new express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


let initCallback;


//this is the first middleware - application middleware , all routes hit this middleware first
myapp.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,X-Requested-With,authorization');
    next(); // next passes to another application middleware
});


// bodyParser
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({ extended: true }));


// path
myapp.use(express.static(
    path.join(__dirname, '/resources')
));


// ejs
myapp.set('views', __dirname + '/views');
myapp.set('view engine', 'ejs');


// sequelize
var mysequelize = require('./configs/dbconfigs.js');
var mysequelize = require('./models/studentModel.js');
var mysequelize = require('./models/teacherModel.js');




// multer storage
var mystorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'resources/videos/courses')
    },

    destination: function (req, file, cb) {
        cb(null, 'resources/videos/profileImage')

    },
    filename: function (req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});


var upload = multer({ storage: mystorage });


//profile Image upload
var mystoragee = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'resources/videos/profileImage')
    },
    filename: function (req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});


var uploadImage = multer({ storage: mystoragee });



// controllers require
var authController = require('./controllers/authController');
var studentController = require('./controllers/studentController');
var teacherController = require('./controllers/teacherController');
var adminController = require('./controllers/adminController');
var courseController = require('./controllers/courseController');
var coursetypeController = require('./controllers/coursetypeController');
var ratingController = require('./controllers/ratingController');
var videoController = require('./controllers/videoController');


//Video Table Register
myapp.post('/video/register', upload.single('courseVideo'), videoController.videoRegister, function (req, res) {
    res.send({
        "status": 200,
        "message": "New Video Data registered"
        // "token": req.genToken
    })
});

			
			// set port
		myapp.listen(3000);
		module.exports = myapp;