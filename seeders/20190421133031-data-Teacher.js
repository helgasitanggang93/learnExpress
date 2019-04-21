'use strict';
var faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     
    */
   return queryInterface.bulkInsert('Teachers', [{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     
    */
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
