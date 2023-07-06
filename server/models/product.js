const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Order = Product.hasMany(models.Order, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "product_id",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });
    }
  }
  Product.init({
    product_id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "product_id",
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
    berat: {
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
  }, {
    sequelize,
    modelName: 'Product',
    underscored: true
  });
  return Product;
};