'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Food', [
      // Vegetables
      {name: 'Tomato',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 1
      {name: 'Broccoli',       calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 2
      {name: 'Peas',           calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 3
      {name: 'Carrot',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 4
      {name: 'Cucumber',       calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 5
      {name: 'Zucchini',       calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 6
      {name: 'Avocado',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 7
      {name: 'Potato',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 8
      // Fruit
      {name: 'Banana',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 9
      {name: 'Apple',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 10
      {name: 'Grapes',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 11
      {name: 'Strawberries',   calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 12
      {name: 'Orange',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 13
      {name: 'Watermelon',     calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 14
      {name: 'Lemon',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 15
      {name: 'Peach',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 16
      // Breakfasty things
      {name: 'Bacon',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 17
      {name: 'Cereal',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 18
      {name: 'Cinnamon Roll',  calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 19
      {name: 'Doughnut',       calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 20
      {name: 'Egg',            calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 21
      {name: 'French Toast',   calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 22
      {name: 'Granola',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 23
      {name: 'Hash Browns',    calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 24
      {name: 'Oatmeal',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 25
      {name: 'Raisin Bread',   calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 26
      {name: 'Sausage',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 27
      {name: 'Scone',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 28
      {name: 'Toast',          calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 29
      {name: 'Waffle',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 30
      {name: 'Yogurt',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 31
      // Snacks
      {name: 'Crepes',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 32
      {name: 'Pretzel',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 33
      {name: 'Chocolate',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 34
      {name: 'Pudding',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 35
      {name: '\'Smore',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 36
      {name: 'Cookie',         calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 37
      {name: 'Twinkie',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 38
      {name: 'Ice Cream',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 39
      // Drinks
      {name: 'Milkshake',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 40
      {name: 'Soft Drink',     calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 41
      {name: 'Milk',           calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 42
      {name: 'Beer',           calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 43
      {name: 'Water',          calories: 0,   createdAt: new Date(), updatedAt: new Date()}, // id: 44
      {name: 'Orange Juice',   calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 45
      {name: 'Apple Juice',    calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 46
      // Entrees
      {name: 'Lasagne',        calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 47
      {name: 'Spaghetti',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 48
      {name: 'Hamburger',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 49
      {name: 'Cheeseburger',   calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 50
      {name: 'Pad Thai',       calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 51
      {name: 'Fried Rice',     calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 52
      {name: 'Enchilada',      calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 53
      {name: 'Deli Sandwich',  calories: 180, createdAt: new Date(), updatedAt: new Date()}, // id: 54
      {name: 'PB&J',           calories: 180, createdAt: new Date(), updatedAt: new Date()}  // id: 55
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Food', null, {});
  }
};
