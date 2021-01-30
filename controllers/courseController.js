var coursemodel = require('../models/courseModel');
var coursetypemodel = require('../models/coursetypeModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var mySeq = require('../configs/dbconfigs')

function courseRegister(req, res, next) {
    // console.log(req.body);
    coursemodel.create({

        title: req.body.Title,
        description: req.body.Description,
        credit: req.body.Credit,
        fee: req.body.Fee,
        course_image: req.body.CourseImage,
        start_date: req.body.StartDate,
        end_date: req.body.EndDate,
        teacher_id: req.body.TeacherID,
        coursetype_id: req.body.CourseTypeID,
        rating_id: req.body.RatingID

    })
        .then(function (result) {

            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//delete course
function deleteCourse(req, res, next) {
    coursemodel.destroy({
        where: {
            id: req.params.id
        },
        raw: true
    })
        .then(function (result) {
            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "course DB Error" });
        })
}

//search Courses
function searchCourse(req, res, next) {
    var search = req.body.search
    //console.log(search)
    coursemodel.findAll({
        where: {
            title: {
                [Op.like]: '%' + search + '%'
            }
        },
        raw: true
    })
        .then(function (result) {
            // console.log(result[1].dataValues);
            req.User = result;
            // console.log(req.allUser);
            next();
            // console.log(result);
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}