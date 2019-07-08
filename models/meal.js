'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    this.belongsToMany(models.Food, {through: 'MealFoods'})
  };
  return Meal;
};
