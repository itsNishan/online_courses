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


//Rating data update
function ratingUpdate(req, res, next) {
    if (req.body.id != '') {
        ratingmodel.update({
            rating: req.body.Rating,
            courseID: req.body.CourseID,
            studentID: req.body.StudentID
    
            }, {
                where: { id: req.params.id }
            })
            .then(function(result) {
                next();
            })
            .catch(function(err) {
                next({ "status":500, "message": "DB Error" });
            })
        } else {
            next({ "status": 500, "message":"Invalid Rating data" });
    
        }
              }
    
    
    
    
    // token
    function token(req, res, next) {
        jwt.sign({ username: req.body.username, accesslevel: 'superadmin' }, 'thisissecretkey', { expiresIn: '10h' },
            function(err, token) {
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
        ratingRegister,
     
        ratingUpdate,
    
           token,
    
    
    }
    