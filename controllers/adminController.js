var usermodel = require('../models/adminModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function adminRegister(req, res, next) {
    // console.log(req.body);
    usermodel.create({
             
       
        email: req.body.Email,
        password: req.hashValue
        })
        .then(function(result) {
            // console.log('data added');
            req.body.email = req.body.Email;
            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}
