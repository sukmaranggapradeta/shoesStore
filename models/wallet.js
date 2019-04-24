'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    UserId: DataTypes.INTEGER,
    balance: DataTypes.INTEGER
  }, {});
  Wallet.associate = function(models) {
    // associations can be defined here
  };
  return Wallet;
};