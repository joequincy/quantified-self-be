var express = require('express');
var router = express.Router();
var Food = require('../../../models').Food;

router.get('/', function(req, res, next) {
  Food.findAll({
    attributes: ['id', 'name', 'calories']
  })
    .then(foods => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(foods))
    })
    .catch( error => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(JSON.stringify({error: "Internal Server Error"}))
    });
});

router.get('/:id', function(req, res, next) {
  // debugger;
  Food.findAll({
    attributes: ['id', 'name', 'calories'],
    where: {
      id: req.params.id
    }
  })
    .then(food => {
      if(food.length !== 0){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(food));
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send(JSON.stringify({error: 'No food found with provided ID.'}));
      }
    })
    .catch(error => {
      res.setHeader('Content-Type', 'application/json')
      res.status(500).send(JSON.stringify({error: "Internal Server Error"}))
    })
})

module.exports = router;
