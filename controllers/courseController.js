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

// //get Course data
// function getCourseData(req, res, next){
// 	coursemodel.findOne({
//             where: { id: req.params.id }
//             // raw: true
//
//         })
//         .then(function(result) {
//             // console.log(result[1].dataValues);
//             req.allUser = result;
//
//             next();
//             // console.log(result);
//         })
//         .catch(function(err) {
//             next({ "status": 500, "message": "DB Error" });
//         })
// }

//get courses by teacher name
// function getCourseDatabyteacher(req, res, next){
// 	coursemodel.findOne({
//             where: { id: req.params.id }
//             // raw: true
//         })
//         .then(function(result) {
//             // console.log(result[1].dataValues);
//             req.allUser = result;
//             next();
//             // console.log(result);
//         })
//         .catch(function(err) {
//             next({ "status": 500, "message": "DB Error" });
//         })
// }


//get courses by teacher names
function getCourseDatabyteacher(req, res, next) {
    mySeq.sequelize.query(
        "SELECT c.id,t.first_name,t.last_name,c.title,ct.coursetype_title,c.`description`,c.`credit`,c.`fee`,c.`course_image`,c.`start_date`,c.`end_date` \
    FROM coursetype ct,teacher t,course c WHERE ct.id = c.coursetype_id AND t.id = c.teacher_id ",
        { type: mySeq.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.status(200)
            // res.json(result);
            req.CourseData = result;
            next();
        }).catch(err => {
            next({ "status": 500, "message": err });
        })
}

//get course data
function getCourseData(req, res, next) {
    var id = req.params.id;
    mySeq.sequelize.query(
        "SELECT c.id,t.first_name,t.last_name,c.title,ct.coursetype_title,AVG(rating) AS rating,c.`description`,c.`credit`,c.`fee`,c.`course_image`,c.`start_date`,c.`end_date` \
          FROM coursetype ct,teacher t,course c,rating r WHERE ct.id = c.coursetype_id AND t.id = c.teacher_id AND c.id="+ id + " ",
        { type: mySeq.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.status(200)
            // res.json(result);
            req.CourseData = result;
            next();
        }).catch(err => {
            next({ "status": 500, "message": err });
        })
}

function getCourseAverageRating(req, res, next) {
    mySeq.sequelize.query(
        "SELECT AVG(rating) as rating, courseID FROM rating GROUP BY courseID",
        { type: mySeq.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.status(200)
            // res.json(result);
            req.AvgCourseRating = result;
            next();
        }).catch(err => {
            next({ "status": 500, "message": err });
        })
}

//get Rating for all Courses
function rating(req, res, next) {

}

//course update
function courseUpdate(req, res, next) {
    if (req.body.id != '') {
        coursemodel.update({
            title: req.body.Title,
            description: req.body.Description,
            credit: req.body.Credit,
            fee: req.body.Fee,
            start_date: req.body.StartDate,
            end_date: req.body.EndDate,
            teacher_id: req.body.TeacherID,
            coursetype_id: req.body.CourseTypeID

        }, {
            where: { id: req.params.id }
        })
            .then(function (result) {
                next();
            })
            .catch(function (err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid course data" });

    }
}




// token
function token(req, res, next) {
    jwt.sign({ username: req.body.username, accesslevel: 'superadmin' }, 'thisissecretkey', { expiresIn: '10h' },
        function (err, token) {
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
    courseRegister,
    deleteCourse,
    getCourseDatabyteacher,
    getCourseData,
    courseUpdate,
    searchCourse,
    token,
    getCourseAverageRating


}
