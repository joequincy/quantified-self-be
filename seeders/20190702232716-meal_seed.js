'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [
      {id: 1, name: "Breakfast",        createdAt: new Date(), updatedAt: new Date()},
      {id: 2, name: "Second Breakfast", createdAt: new Date(), updatedAt: new Date()},
      {id: 3, name: "Elevenses",        createdAt: new Date(), updatedAt: new Date()},
      {id: 4, name: "Luncheon",         createdAt: new Date(), updatedAt: new Date()},
      {id: 5, name: "Afternoon Tea",    createdAt: new Date(), updatedAt: new Date()},
      {id: 6, name: "Dinner",           createdAt: new Date(), updatedAt: new Date()},
      {id: 7, name: "Supper",           createdAt: new Date(), updatedAt: new Date()}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {})
  }
};
