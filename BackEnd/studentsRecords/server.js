
var express = require('express');
var logger = require('./logger');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studentsRecords');

var students = require('./routes/students');
var residencies = require('./routes/residencies');
var genders = require('./routes/genders');
var scholarships = require('./routes/scholarships');
var advancedStandings = require('./routes/advancedStandings');
var highschools = require('./routes/highSchools');
var highSchoolSubjects = require('./routes/highSchoolSubjects');
var highSchoolCourses = require('./routes/highSchoolCourses');
var highSchoolGrades = require('./routes/highSchoolGrades');
var termCodes = require('./routes/termCodes');
var planCodes = require('./routes/planCodes');
var courseCodes = require('./routes/courseCodes');
var programRecords = require('./routes/programRecords');
var grades = require('./routes/grades');
var users = require('./routes/users');
var passwords = require('./routes/passwords');
var roleCodes = require('./routes/roleCodes');
var userRoles = require('./routes/userRoles');
var rolePermissions = require('./routes/rolePermissions');
var logins = require('./routes/logins');
var roots = require('./routes/roots');
var assessmentCodes = require('./routes/assessmentCodes');
var terms = require('./routes/terms');
var faculties = require('./routes/faculties');
var departments = require('./routes/departments');
var courseGroupings = require('./routes/courseGroupings');
var adjudicationCategories = require('./routes/adjudicationCategories');
var programAdministrations = require('./routes/programAdministrations');
var logicalExpressions = require('./routes/logicalExpressions');
var adjudications = require('./routes/adjudications');

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(logger);
//app.use(express.static('public'));

app.use('/students', students);
app.use('/residencies', residencies);
app.use('/genders', genders);
app.use('/scholarships', scholarships);
app.use('/advancedStandings', advancedStandings);
app.use('/highSchools', highschools);
app.use('/highSchoolSubjects', highSchoolSubjects);
app.use('/highSchoolCourses', highSchoolCourses);
app.use('/termCodes', termCodes);
app.use('/planCodes', planCodes);
app.use('/courseCodes', courseCodes);
app.use('/highSchoolGrades', highSchoolGrades);
app.use('/programRecords', programRecords);
app.use('/grades', grades);
app.use('/users', users);
app.use('/passwords', passwords);
app.use('/roleCodes', roleCodes);
app.use('/userRoles', userRoles);
app.use('/rolePermissions', rolePermissions);
app.use('/logins', logins);
app.use('/roots', roots);
app.use('/assessmentCodes', assessmentCodes);
app.use('/terms', terms);
app.use('/faculties', faculties);
app.use('/departments', departments);
app.use('/courseGroupings', courseGroupings);
app.use('/adjudicationCategories', adjudicationCategories);
app.use('/programAdministrations', programAdministrations);
app.use('/logicalExpressions', logicalExpressions);
app.use('/adjudications', adjudications);

app.listen(3700, function () {
    console.log('Listening on port 3700');
});
