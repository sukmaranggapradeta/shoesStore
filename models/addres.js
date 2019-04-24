'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addres = sequelize.define('Addres', {
    CustomerId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Addres.associate = function(models) {
    // associations can be defined here
  };
  return Addres;
};