'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.Product, {
        foreignKey : "Product_id",
        targetKey: "Product_id",
        as: "Product",
      })
      Order.belongsTo(models.User, {
        foreignKey: "User_id",
        targetKey: "User_id",
        as: "User",
      })
    }
  }
  Order.init({
    Order_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Product_id: {
      type: Sequelize.STRING
    },
    Account_id: {
      type: Sequelize.STRING
    },
    Jumlah: {
      type: Sequelize.INTEGER
    },
    total: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};