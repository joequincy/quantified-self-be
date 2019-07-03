var api = require('express').Router();
var mealsRouter = require('./meals');

api.use('/meals', mealsRouter);
module.exports = api;
