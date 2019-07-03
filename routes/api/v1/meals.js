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
    res.status(500).send({error: "Internal Server Error"})
  })
})

meals.get('/:id', (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.findByPk(req.params.id, {
    attributes: ["id", "name"],
    include: [{
      model: Food,
      attributes: ["id", "name", "calories"],
      through: {
        attributes: []
      }
    }]
  }).then(meal => {
    if(meal){
      res.status(200).send(meal)
    } else {
      res.status(404).send({error: "No meal found with the provided ID."})
    }
  }).catch(error => {
    res.status(500).send({error: "Internal Server Error"})
  })
})

module.exports = meals
