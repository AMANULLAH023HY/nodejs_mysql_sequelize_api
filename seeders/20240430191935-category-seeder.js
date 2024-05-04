"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("categories", [
      {
        name: "NodeJS",
      },
      {
        name: "VueJS",
      },
      {
        name: "ReactJS",
      },
      {
        name: "ReactNative",
      },
      {
        name: "Laravel",
      },
      {
        name: "Flutter",  
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories',{}, null); 
  },
};
