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

meals.post('/:mealId/foods/:foodId', (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.findByPk(req.params.mealId).then(meal => {
    if(meal){
      Food.findByPk(req.params.foodId).then(food => {
        if(food){
          meal.addFood(food).then(result => {
            res.status(201).send({message: `Successfully added ${food.name} to ${meal.name}`})
          })
        } else {
          res.status(404).send({error: "No food found with the provided ID."})
        }
      })
    } else {
      res.status(404).send({error: "No meal found with the provided ID."})
    }
  }).catch(error => {
    res.status(500).send({error: "Internal Server Error"})
  })
})

module.exports = meals
