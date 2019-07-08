var api = require('express').Router();
var mealsRouter = require('./meals');
var foodsRouter = require('./foods');

api.use('/meals', mealsRouter);
api.use('/foods', foodsRouter);
module.exports = api;
