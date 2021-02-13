var videomodel = require('../models/videoModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequeli
var mySeq = require('../configs/dbconfigs')

function videoRegister(req, res, next) {
    videomodel.create({
        caption: req.body.Caption,
        namq.testVall,
        description: req.body.Description,
        title: req.body.Title,
        courseID: req.body.CourseID
    })
        .then(function (result) {
            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//video update
function videoUpdate(req, res, next) {
    if (req.body.id != '') {
        videomodel.up{
            caption: req.body.Caption,
            name: req.body.Name,
            description: req.body.Description,
            title: req.body.title,
            courseID: req.body.CourseID

        }, {
            where: { id: req.params.id }
        })
            .then(function (result) {
                next();
            })
            .catch(function (err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid video data" });

    }
}


//get video data using courseID
function getAllVideoDeq, res, next) {

    videomodel.findOne({
        where: { id: req.params.id }
        // raw: true
    })
        .then(function (result) {
            // console.log(result[1].dataValues);
            req.allUser = result;
            next();
            // console.log(result);
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

// token
function token(req, res, next) {
    jwt.sign({ username: req.body.username, accesslevel: 'superadmin' }, 'thisissecretkey', { expiresIn: '10h' },
        function (er) {
            // console.log(token);
            if (err != null || undefined) {
                console.log(err);
                res.send({ "status": "401", "message": "unauthorized" });
            } else {
                req.genToken = token;
                // res.status(200);
                // res.json(token);
                next();
                console.log(token);
            }
        });
}






module.exports = {
    videoRegister,
    getAllVideoData,
    videoUpdate,
}