var meals = require('express').Router();
var cors = require('cors')
var models = require('../../../models');
var objectSkeletonMatches = require('../../../helpers').objectSkeletonMatches
const Meal = models.Meal
const Food = models.Food

/* Meals Index */
meals.get('/', cors(), (req, res, next) => {
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

/* Meal Show */
meals.get('/:id', cors(), (req, res, next) => {
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

/* Add Food to Meal */
meals.post('/:mealId/foods/:foodId', cors(), (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.findByPk(req.params.mealId).then(meal => {
    if(meal){
      return Food.findByPk(req.params.foodId).then(food => {
        if(food){
          return meal.addFood(food).then(result => {
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

/* Remove Food from Meal */
meals.delete('/:mealId/foods/:foodId', cors(), (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.findByPk(req.params.mealId).then(meal => {
    if(meal){
      return Food.findByPk(req.params.foodId).then(food => {
        if(food){
          return meal.removeFood(food).then(result => {
            res.status(204).send()
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

/* Create Meal */
meals.post('/', cors(), (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  if(isMeal(req.body)){
    Meal.create({name: req.body.meal.name}).then(meal => {
      res.status(201).send({id: meal.id, name: meal.name})
    }).catch(error => {
      res.status(500).send({error: "Internal Server Error"})
    })
  } else {
    res.status(400).send({error: "Invalid request. Please confirm request body matches API specification."})
  }
})

/* Delete Meal */
meals.delete('/:id', cors(), (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  Meal.destroy({
    where: {
      id: req.params.id
    }
  }).then(meal => {
    if(meal !== 0){
      res.status(204).send()
    } else {
      res.status(404).send({error: "No meal found with the provided ID."})
    }
  }).catch(error => {
    res.status(500).send({error: "Internal Server Error"})
  })
})

module.exports = meals


function isMeal(obj){
  let expected = {meal: {name: null}}
  return objectSkeletonMatches(obj, expected)
}
