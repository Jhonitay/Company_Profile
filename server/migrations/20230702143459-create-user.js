'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      User_id: {
        type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: "user_id",
      },
      First_name: {
        type: Sequelize.STRING,
          allowNull: false,
          field: "first_name",
      },
      Last_name: {
        type: Sequelize.STRING,
          allowNull: false,
          field: "last_name",
      },
      Username: {
        type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          field: "username",
      },
      createdAt: {
        type: Sequelize.DATE,
          allowNull: false,
      } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};