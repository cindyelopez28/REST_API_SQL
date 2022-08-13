var getCourses = require("../controllers/dbcontrollers")
var express = require('express');
var router = express.Router();


//GET http://localhost:5000/api/users HTTP/1.1
router.get('/users', function(req, res, next) {
   res.json({
    message: '/getusers',
  });
});


// POST http://localhost:5000/api/users HTTP/1.1
router.post('/users', function(req, res, next) {
    res.json({
     message: '/postusers',
   });
 });

// GET http://localhost:5000/api/courses HTTP/1.1
router.get('/courses', function(req, res, next) {
    // no authentication
    console.log("hello")
    getCourses(res);
 });

// GET http://localhost:5000/api/courses/1 HTTP/1.1
router.get('/courses/:id', function(req, res, next) {
    res.json({
     message: '/getcourses id',
   });
 });

// POST http://localhost:5000/api/courses HTTP/1.1
router.post('/courses', function(req, res, next) {
    res.json({
     message: '/post courses',
   });
 });

// PUT http://localhost:5000/api/courses/1 HTTP/1.1
router.put('/courses/:id', function(req, res, next) {
    res.json({
     message: '/put courses id',
   });
 });

// DELETE http://localhost:5000/api/courses/4 HTTP/1.1
router.delete('/courses/:id', function(req, res, next) {
    res.json({
     message: '/put courses id',
   });
 });

module.exports = router;
