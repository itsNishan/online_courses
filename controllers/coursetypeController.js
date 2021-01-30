var coursetypemodel = require('../models/coursetypeModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function coursetypeRegister(req, res, next) {
    // console.log(req.body);
    coursetypemodel.create({

        coursetype_title: req.body.CoursetypeTitle
        })
        .then(function(result) {

            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}
