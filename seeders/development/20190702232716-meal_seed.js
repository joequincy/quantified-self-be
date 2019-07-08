'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [
      {name: "Breakfast",        createdAt: new Date(), updatedAt: new Date()}, //id: 1
      {name: "Second Breakfast", createdAt: new Date(), updatedAt: new Date()}, //id: 2
      {name: "Elevenses",        createdAt: new Date(), updatedAt: new Date()}, //id: 3
      {name: "Luncheon",         createdAt: new Date(), updatedAt: new Date()}, //id: 4
      {name: "Afternoon Tea",    createdAt: new Date(), updatedAt: new Date()}, //id: 5
      {name: "Dinner",           createdAt: new Date(), updatedAt: new Date()}, //id: 6
      {name: "Supper",           createdAt: new Date(), updatedAt: new Date()}  //id: 7
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {})
  }
};
