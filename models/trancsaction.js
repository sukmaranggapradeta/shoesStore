'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trancsaction = sequelize.define('Trancsaction', {
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  Trancsaction.associate = function(models) {
    // associations can be defined here
  };
  return Trancsaction;
};