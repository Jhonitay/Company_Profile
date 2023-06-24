"use strict";
const { Model } = require("sequelize");
const { default: Product } = require("../../src/components/PAGE/Product Box/product");
module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    static associate(models) {
      this.Product = this.hasMany(models.Product, {
        foreignKey: {
          name: "Product_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Details.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "id",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name",
      },
      dimensi: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "dimensi",
      },
      berat:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:"0",
        field: "berat",
      },
      stok:{
        type:DataTypes.INTEGER,
          allowNull:true,
          defaultValue:"1",
          field: "stok",
      },
      jenis:{
        type:DataTypes.ENUM("makanan","minuman"),
        allowNull:false,
        defaultValue,
        field: "jenis"
      },
      },
    {
      sequelize,
      modelName: "Details",
      tableName: "details",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Details;
};
