'use strict';
var faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Students', [{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {});
  }
};
