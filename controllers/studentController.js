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

// student update
function studentUpdate(req, res, next) {
    // console.log(req.body);
    if (req.body.id != '') {
        studentmodel.update({
            first_name: req.body.FirstName,
            last_name: req.body.LastName,
            address: req.body.Address,
            dob: req.body.DOB,
            phone: req.body.Phone,
            gender: req.body.Gender,
            email: req.body.Email,
            verify:req.body.Verify
        }, {
            where: { id: req.params.id }
        })
            .then(function (result) {
                // console.log('data added');
                next();
            })
            .catch(function (err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid Student" });
    }
}

//profile image update

function studentImageUpdate(req, res, next) {
    // console.log(req.body);
    if (req.body.id != '') {
        studentmodel.update({
            profile_image: req.testVall
        }, {
            where: { id: req.body.id }
        })
            .then(function (result) {
                // console.log('data added');
                next();
            })
            .catch(function (err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid Profile Image" });
    }
}


