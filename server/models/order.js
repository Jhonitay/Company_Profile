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
    Product_id: DataTypes.STRING,
    User_id: DataTypes.STRING,
    Jumlah: DataTypes.INTEGER,
    total: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};