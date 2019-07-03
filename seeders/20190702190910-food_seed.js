'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Food', [{
      name: 'Apple',
      calories: 95,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Banana',
      calories: 105,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pear',
      calories: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Orange',
      calories: 62,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Food', null, {});
  }
};
