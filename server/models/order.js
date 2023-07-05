const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.Product, {
        foreignKey : "product_id",
        targetKey: "product_id",
        as: "product",
      })
      Order.belongsTo(models.Account, {
        foreignKey: "account_id",
        targetKey: "account_id",
        as: "account",
      })
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "user_id",
        as: "user",
      })

      this.Product = Order.belongsTo(models.Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "product_id",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });

      this.User = Order.belongsTo(models.User, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "user_id",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });

    }
  }
  Order.init({
    order_id: {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique : true,
      field : "order_id",
      
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "product_id",
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "user_id",
    },
    account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "account_id",
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "jumlah",
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "total",
    },
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true
  });
  return Order;
};