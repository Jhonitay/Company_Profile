"use strict";
const { Model } = require("sequelize");
const { default: Product } = require("../../src/components/PAGE/Product Box/product");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.Details = this.hasMany(models.Details, {
        foreignKey: {
          name: "Product_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "product_id",
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "product_name",
      },
      harga_satuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "harga_satuan",
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "product",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Product;
};
