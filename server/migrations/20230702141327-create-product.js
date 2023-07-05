'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      Product_id: {
        type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: "product_id",
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      Dimensi: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "dimensi",
      },
      Berat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "berat",
      },
      stok: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "stock",
      },
      jenis: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "jenis",
      },
      createdAt: {
        type: Sequelize.DATE,
          allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};