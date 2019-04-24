'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    role:DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(user, options)=>{
        let hash = bcrypt.hashSync(`${user.password}/\/`, salt);
        user.password = hash
        user.role = 'customer'
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    
  };

  User.cekEmail = function(input) {
    return User.findAll()
    .then((user)=>{
      for (let i = 0; i < user.length; i++) {
        if(user[i].dataValues.email === input){
          return false
        }
      }
      return true
    })
  }
  return User;
};