'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'stock', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products', 'stock');
  }
};
