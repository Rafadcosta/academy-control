const express = require('express');
const routes = express.Router();

routes.get('/', function(res, res) {
    return res.redirect("/instructors");
})

routes.get('/instructors', function(res, res) {
    return res.render("instructors/index");
})

routes.get('/members', function(res, res) {
    return res.send("members");
})

module.exports = routes;