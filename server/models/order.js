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
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique : true,
      field : "order_id",
      
    },
    Product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "product_id",
    },
    Account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "account_id",
    },
    Jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "jumlah",
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "total",
    },
    createdAt: {
      type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};