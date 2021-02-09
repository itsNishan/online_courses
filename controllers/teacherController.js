var teachermodel = require('../models/teacherModel');
var studentmodel = require('../models/studentModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function teacherRegister(req, res, next) {
    // console.log(req.body);
    teachermodel.create({

        first_name:req.body.FirstName,
        last_name:req.body.LastName,
        dob:req.body.DOB,
        gender:req.body.Gender,
        phone:req.body.Phone,
        address:req.body.Address,
        email: req.body.Email,
        bio:req.body.Bio,
        password: req.hashValue,

        studentID:req.body.StudentID
        })
        .then(function(result) {
            //console.log('data added');
            req.body.email = req.body.Email;
            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

// teacher update
function teacherUpdate(req, res, next) {
    // console.log(req.body);
    if (req.body.id != '') {
        teachermodel.update({
                first_name: req.body.FirstName,
                last_name: req.body.LastName,
                address: req.body.Address,
                dob: req.body.DOB,
                phone: req.body.Phone,
                gender:req.body.Gender,
                bio:req.body.Bio,
                email:req.body.Email,
                studentID:req.body.StudentID
            }, {
                where: { id: req.params.id }
            })
            .then(function(result) {
                // console.log('data added');
                next();
            })
            .catch(function(err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid Teacher" });
    }
}

// teacher profile image update

function teacherImageUpdate(req, res, next) {
    // console.log(req.body);
    if (req.body.id != '') {
        teachermodel.update({
            profile_image: req.testVall
            }, {
                where: { id: req.body.id }
            })
            .then(function(result) {
                // console.log('data added');
                next();
            })
            .catch(function(err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid Profile Image" });
    }
}

