var express = require('express');
var router = express.Router();
var Food = require('../../../models').Food;

// GET all Foods
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.findAll({
    attributes: ['id', 'name', 'calories']
  })
  .then(foods => {
    res.status(200).send(JSON.stringify(foods))
  })
  .catch( error => {
    res.status(500).send(JSON.stringify({error: "Internal Server Error"}))
  });
});

// GET single Food
router.get('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.findAll({
    attributes: ['id', 'name', 'calories'],
    where: {
      id: req.params.id
    }
  })
  .then(food => {
    if(food.length !== 0){
      res.status(200).send(JSON.stringify(food));
    } else {
      res.status(404).send(JSON.stringify({error: 'No food found with provided ID.'}));
    }
  })
  .catch(error => {
    res.status(500).send(JSON.stringify({error: "Internal Server Error"}))
  })
})

// POST New Food
router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if(validFood(req.body.food)) {
    Food.create({
      name: req.body.food.name,
      calories: req.body.food.calories
    })
    .then(food => {
      foodItem = {
        id: food.id,
        name: food.name,
        calories: food.calories
      }
      res.status(201).send(JSON.stringify(foodItem));
    })
    .catch(error => {
      res.status(500).send(JSON.stringify({error: "Internal Server Error"}));
    })
  } else {
    res.status(400).send(JSON.stringify({error: 'Invalid request. Please confirm request body matches API specification.' }));
  }
});

// Params validation
function validFood(params) {
  if(params !== undefined ) {
    if(params.hasOwnProperty('name') && params.hasOwnProperty('calories')) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}


module.exports = router;
