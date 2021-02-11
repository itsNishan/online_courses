var videomodel = require('../models/videoModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var mySeq = require('../configs/dbconfigs')

function videoRegister(req, res, next) {
    videomodel.create({
        caption: req.body.Caption,
        name: req.testVall,
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
