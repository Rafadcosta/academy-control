const express = require('express');
const routes = express.Router();


routes.get('/', function(res, res) {
    return res.send("ok");
})

module.exports = routes;