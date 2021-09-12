const express = require('express');
const routes = express.Router();
const instructor = require('./instructors');

routes.get('/', function(req, res) {
    return res.redirect("/instructors");
});

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index");
});

routes.get('/instructor/create', function(req, res) {
    return res.render("instructors/create");
});

routes.get('/instructor/:id', instructor.show);

routes.post("/instructors", instructor.post);

routes.get('/members', function(req, res) {
    return res.send("members");
});


module.exports = routes;