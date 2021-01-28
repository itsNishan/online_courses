var adminmodel = require('../models/adminModel');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// check admin token email
function admintokenemailvalidator(req, res, next) {

    adminmodel.findOne({

            where: {
                email: req.email
            }
        })
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            // req.userHashPassword = result.dataValues.password;
            req.adminInfoo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Invalid user token"
            })

        })
}


function checkPasswordMatch(req, res, next) {
    // comapre's first parameter password obtained from login form i.e. req.body.password
    // second parameter the value passed from previous function (from database) through req object
    bcrypt.compare(req.body.Password, req.userHashPassword, function(err, res) {
        // console.log(res);
        if (res == true) {
            next();
        } else if (res == false) {
            next({
                "status": 400,
                "message": "Password does not match"
            });
        }
    });
}




function jwtTokenGen(req, res, next) {

    jwt.sign({
            email: req.body.email,
            accessLevel: 'superuser'
        }, 'thisissecretkey', {
            expiresIn: "10h"
        },

        function(err, token) {
            if (err != null || undefined) {
                console.log(err)
                next({
                    "status": 401,
                    "message": "Unauthorized token"
                })
            } else {
                req.genToken = token;
                next();
                // console.log(token)   
            }

        }
    );

}

function adminjwtTokenGen(req, res, next) {
    jwt.sign({
            email: req.body.Email,
            accessLevel: 'superadmin'
        }, 'thisissecretkey', {
            expiresIn: "10h"
        },

        function(err, token) {
            if (err != null || undefined) {
                console.log(err)
                next({
                    "status": 401,
                    "message": "Unauthorized token"
                })
            } else {
                req.genToken = token;
                next();
                // console.log(token)   
            }
        }
    );
}







module.exports = {
    jwtTokenGen,
    tokenVerify,
    adminValidator,
    adminjwtTokenGen,
    admintokenemailvalidator,
}