var meals = require('express').Router();
var models = require('../../../models');
const Meal = models.Meal
const Food = models.Food

meals.get('/', (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.findAll({
    attributes: ["id", "name"],
    include: [{
      model: Food,
      attributes: ["id", "name", "calories"],
      through: {
        attributes: []
      }
    }],
  }).then(meals => {
    res.status(200).send(meals)
  }).catch(error => {
    res.status(500).send(error)
  })
})

module.exports = meals
