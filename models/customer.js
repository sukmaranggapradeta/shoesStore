'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(user, options)=>{
        let hash = bcrypt.hashSync(`${user.password}/\/`, salt);
        user.password = hash
      }
    }
  });
  Customer.associate = function(models) {
    // associations can be defined here
  };

  Customer.cekEmail = function(input) {
    return Customer.findAll()
    .then((customers)=>{
      for (let i = 0; i < customers.length; i++) {
        if(customers[i].dataValues.email === input){
          return false
        }
      }
      return true
    })
  }
  return Customer;
};