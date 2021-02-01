var ratingmodel = require('../models/ratingModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function ratingRegister(req, res, next) {
    // console.log(req.body);
    ratingmodel.create({

        rating: req.body.Rating,
        courseID: req.body.CourseID,
        studentID: req.body.StudentID
       
        })
        .then(function(result) {

            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}