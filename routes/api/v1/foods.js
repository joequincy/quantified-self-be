var express = require('express');
var cors = require('cors');
var router = express.Router();
var Food = require('../../../models').Food;

// GET all Foods
router.get('/', cors(), function(req, res, next) {
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
router.get('/:id', cors(), function(req, res, next) {
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
router.post('/', cors(), function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if(validFood(req.body.food)) {
    Food.create({
      name: req.body.food.name,
      calories: req.body.food.calories
    })
    .then(food => {
      res.status(201).send(JSON.stringify(foodItem(food)));
    })
    .catch(error => {
      res.status(500).send(JSON.stringify({error: "Internal Server Error"}));
    })
  } else {
    res.status(400).send(JSON.stringify({error: 'Invalid request. Please confirm request body matches API specification.' }));
  }
});

// PATCH New Food
router.patch('/:id', cors(), function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Accept-Patch', 'application/json');
  if(validFood(req.body.food)) {
    Food.update({
      name: req.body.food.name,
      calories: req.body.food.calories,
    },
    {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    .then(food => {
      res.status(200).send(JSON.stringify(foodItem(food[1][0])))
    })
    .catch( error => {
      res.status(500).send({error: 'Internal Server Error'})
    })
  } else {
    res.status(400).send(JSON.stringify({error: 'Invalid request. Please confirm request body matches API specification.' }));
  }
});

router.delete('/:id', cors(), function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  Food.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(food => {
    if(food !== 0) { // if food is found it returns a 1 if not returns a 0
      res.sendStatus(204)
    } else {
      res.status(404).send(JSON.stringify({error: 'No food found with provided ID.'}))
    }
  })
  .catch( error => {
    res.status(500).send({error: 'Internal Server Error'})
  })
})

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

// Food Return Setup
function foodItem(food) {
  return foodItem = {
    id: food.id,
    name: food.name,
    calories: food.calories
  }
}


module.exports = router;
