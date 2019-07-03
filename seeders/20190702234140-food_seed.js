'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Food', [
      // Vegetables
      {id: 1,  name: 'Tomato',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 2,  name: 'Broccoli',       calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 3,  name: 'Peas',           calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 4,  name: 'Carrot',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 5,  name: 'Cucumber',       calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 6,  name: 'Zucchini',       calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 7,  name: 'Avocado',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 8,  name: 'Potato',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      // Fruit
      {id: 9,  name: 'Banana',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 10, name: 'Apple',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 11, name: 'Grapes',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 12, name: 'Strawberries',   calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 13, name: 'Orange',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 14, name: 'Watermelon',     calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 15, name: 'Lemon',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 16, name: 'Peach',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      // Breakfasty things
      {id: 17, name: 'Bacon',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 18, name: 'Cereal',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 19, name: 'Cinnamon Roll',  calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 20, name: 'Doughnut',       calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 21, name: 'Egg',            calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 22, name: 'French Toast',   calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 23, name: 'Granola',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 24, name: 'Hash Browns',    calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 25, name: 'Oatmeal',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 26, name: 'Raisin Bread',   calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 27, name: 'Sausage',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 28, name: 'Scone',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 29, name: 'Toast',          calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 30, name: 'Waffle',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 31, name: 'Yogurt',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      // Snacks
      {id: 32, name: 'Crepes',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 33, name: 'Pretzel',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 34, name: 'Chocolate',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 35, name: 'Pudding',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 36, name: '\'Smore',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 37, name: 'Cookie',         calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 38, name: 'Twinkie',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 39, name: 'Ice Cream',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      // Drinks
      {id: 40, name: 'Milkshake',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 41, name: 'Soft Drink',     calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 42, name: 'Milk',           calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 43, name: 'Beer',           calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 44, name: 'Water',          calories: 0,   createdAt: new Date(), updatedAt: new Date()},
      {id: 45, name: 'Orange Juice',   calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 46, name: 'Apple Juice',    calories: 180, createdAt: new Date(), updatedAt: new Date()},
      // Entrees
      {id: 47, name: 'Lasagne',        calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 48, name: 'Spaghetti',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 49, name: 'Hamburger',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 50, name: 'Cheeseburger',   calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 51, name: 'Pad Thai',       calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 52, name: 'Fried Rice',     calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 53, name: 'Enchilada',      calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 54, name: 'Deli Sandwich',  calories: 180, createdAt: new Date(), updatedAt: new Date()},
      {id: 55, name: 'PB&J',           calories: 180, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Food', null, {});
  }
};
