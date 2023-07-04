'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      Order_id: {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique : true,
        field : "order_id",
      },
      Product_id: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "product_id",
      },
      Account_id: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "account_id",
      },
      Jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "jumlah",
      },
      total: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "total",
      },
      createdAt: {
        type: Sequelize.DATE,
          allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};