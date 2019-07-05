'use strict';
let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * Math.floor(max + 1 - min) + min)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MealFoods', [
      {MealId: getRandomInt(1,7), FoodId: 1,  createdAt: new Date(), updatedAt: new Date()}, // id: 1
      {MealId: getRandomInt(1,7), FoodId: 2,  createdAt: new Date(), updatedAt: new Date()}, // id: 2
      {MealId: getRandomInt(1,7), FoodId: 3,  createdAt: new Date(), updatedAt: new Date()}, // id: 3
      {MealId: getRandomInt(1,7), FoodId: 4,  createdAt: new Date(), updatedAt: new Date()}, // id: 4
      {MealId: getRandomInt(1,7), FoodId: 5,  createdAt: new Date(), updatedAt: new Date()}, // id: 5
      {MealId: getRandomInt(1,7), FoodId: 6,  createdAt: new Date(), updatedAt: new Date()}, // id: 6
      {MealId: getRandomInt(1,7), FoodId: 7,  createdAt: new Date(), updatedAt: new Date()}, // id: 7
      {MealId: getRandomInt(1,7), FoodId: 8,  createdAt: new Date(), updatedAt: new Date()}, // id: 8
      {MealId: getRandomInt(1,7), FoodId: 9,  createdAt: new Date(), updatedAt: new Date()}, // id: 9
      {MealId: getRandomInt(1,7), FoodId: 10, createdAt: new Date(), updatedAt: new Date()}, // id: 10
      {MealId: getRandomInt(1,7), FoodId: 11, createdAt: new Date(), updatedAt: new Date()}, // id: 11
      {MealId: getRandomInt(1,7), FoodId: 12, createdAt: new Date(), updatedAt: new Date()}, // id: 12
      {MealId: getRandomInt(1,7), FoodId: 13, createdAt: new Date(), updatedAt: new Date()}, // id: 13
      {MealId: getRandomInt(1,7), FoodId: 14, createdAt: new Date(), updatedAt: new Date()}, // id: 14
      {MealId: getRandomInt(1,7), FoodId: 15, createdAt: new Date(), updatedAt: new Date()}, // id: 15
      {MealId: getRandomInt(1,7), FoodId: 16, createdAt: new Date(), updatedAt: new Date()}, // id: 16
      {MealId: getRandomInt(1,7), FoodId: 17, createdAt: new Date(), updatedAt: new Date()}, // id: 17
      {MealId: getRandomInt(1,7), FoodId: 18, createdAt: new Date(), updatedAt: new Date()}, // id: 18
      {MealId: getRandomInt(1,7), FoodId: 19, createdAt: new Date(), updatedAt: new Date()}, // id: 19
      {MealId: getRandomInt(1,7), FoodId: 20, createdAt: new Date(), updatedAt: new Date()}, // id: 20
      {MealId: getRandomInt(1,7), FoodId: 21, createdAt: new Date(), updatedAt: new Date()}, // id: 21
      {MealId: getRandomInt(1,7), FoodId: 22, createdAt: new Date(), updatedAt: new Date()}, // id: 22
      {MealId: getRandomInt(1,7), FoodId: 23, createdAt: new Date(), updatedAt: new Date()}, // id: 23
      {MealId: getRandomInt(1,7), FoodId: 24, createdAt: new Date(), updatedAt: new Date()}, // id: 24
      {MealId: getRandomInt(1,7), FoodId: 25, createdAt: new Date(), updatedAt: new Date()}, // id: 25
      {MealId: getRandomInt(1,7), FoodId: 26, createdAt: new Date(), updatedAt: new Date()}, // id: 26
      {MealId: getRandomInt(1,7), FoodId: 27, createdAt: new Date(), updatedAt: new Date()}, // id: 27
      {MealId: getRandomInt(1,7), FoodId: 28, createdAt: new Date(), updatedAt: new Date()}, // id: 28
      {MealId: getRandomInt(1,7), FoodId: 29, createdAt: new Date(), updatedAt: new Date()}, // id: 29
      {MealId: getRandomInt(1,7), FoodId: 30, createdAt: new Date(), updatedAt: new Date()}, // id: 30
      {MealId: getRandomInt(1,7), FoodId: 31, createdAt: new Date(), updatedAt: new Date()}, // id: 31
      {MealId: getRandomInt(1,7), FoodId: 32, createdAt: new Date(), updatedAt: new Date()}, // id: 32
      {MealId: getRandomInt(1,7), FoodId: 33, createdAt: new Date(), updatedAt: new Date()}, // id: 33
      {MealId: getRandomInt(1,7), FoodId: 34, createdAt: new Date(), updatedAt: new Date()}, // id: 34
      {MealId: getRandomInt(1,7), FoodId: 35, createdAt: new Date(), updatedAt: new Date()}, // id: 35
      {MealId: getRandomInt(1,7), FoodId: 36, createdAt: new Date(), updatedAt: new Date()}, // id: 36
      {MealId: getRandomInt(1,7), FoodId: 37, createdAt: new Date(), updatedAt: new Date()}, // id: 37
      {MealId: getRandomInt(1,7), FoodId: 38, createdAt: new Date(), updatedAt: new Date()}, // id: 38
      {MealId: getRandomInt(1,7), FoodId: 39, createdAt: new Date(), updatedAt: new Date()}, // id: 39
      {MealId: getRandomInt(1,7), FoodId: 40, createdAt: new Date(), updatedAt: new Date()}, // id: 40
      {MealId: getRandomInt(1,7), FoodId: 41, createdAt: new Date(), updatedAt: new Date()}, // id: 41
      {MealId: getRandomInt(1,7), FoodId: 42, createdAt: new Date(), updatedAt: new Date()}, // id: 42
      {MealId: getRandomInt(1,7), FoodId: 43, createdAt: new Date(), updatedAt: new Date()}, // id: 43
      {MealId: getRandomInt(1,7), FoodId: 44, createdAt: new Date(), updatedAt: new Date()}, // id: 44
      {MealId: getRandomInt(1,7), FoodId: 45, createdAt: new Date(), updatedAt: new Date()}, // id: 45
      {MealId: getRandomInt(1,7), FoodId: 46, createdAt: new Date(), updatedAt: new Date()}, // id: 46
      {MealId: getRandomInt(1,7), FoodId: 47, createdAt: new Date(), updatedAt: new Date()}, // id: 47
      {MealId: getRandomInt(1,7), FoodId: 48, createdAt: new Date(), updatedAt: new Date()}, // id: 48
      {MealId: getRandomInt(1,7), FoodId: 49, createdAt: new Date(), updatedAt: new Date()}, // id: 49
      {MealId: getRandomInt(1,7), FoodId: 50, createdAt: new Date(), updatedAt: new Date()}, // id: 50
      {MealId: getRandomInt(1,7), FoodId: 51, createdAt: new Date(), updatedAt: new Date()}, // id: 51
      {MealId: getRandomInt(1,7), FoodId: 52, createdAt: new Date(), updatedAt: new Date()}, // id: 52
      {MealId: getRandomInt(1,7), FoodId: 53, createdAt: new Date(), updatedAt: new Date()}, // id: 53
      {MealId: getRandomInt(1,7), FoodId: 54, createdAt: new Date(), updatedAt: new Date()}, // id: 54
      {MealId: getRandomInt(1,7), FoodId: 55, createdAt: new Date(), updatedAt: new Date()}  // id: 55
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MealFoods', null, {});
  }
};
