vr studentmodel = require('../models/studentModel');
var teachermodel = require('../models/teacherModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function studentRegister(req, res, next) {
    // console.log(req.body);
    studentmodel.create({

        profileImage: req.testVall,
        first_name: req.body.FirstName,
        last_name: req.body.LastName,
        address: req.body.Address,
        phone: req.body.Phone,
        dob: req.body.DOB,
        gender: req.body.Gender,
        email: req.body.Email,
        password: req.hashValue
    })
        .then(function (result) {
            // console.log('data added');
            req.body.email = req.body.Email;
            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//delete student
function deleteStudent(req, res, next) {
    studentmodel.destroy({
        where: {
            id: req.params.id
        },
        raw: true
    })
        .then(function (result) {
            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}



