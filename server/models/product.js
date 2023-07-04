'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    Product_id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "product_id",
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    Dimensi: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "dimensi",
    },
    Berat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "berat",
    },
    stok: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "stock",
    },
    jenis: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "jenis",
    },
    createdAt: {
      type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};