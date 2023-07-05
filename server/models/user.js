'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Account, {
        foreignKey: "account_id",
        targetKey: "account_id",
        as: "account",
      });
    }
  }
  User.init({
    User_id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "user_id",
    },
    First_name: {
      type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
    },
    Last_name: {
      type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
    },
    Username: {
      type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "username",
    },
    createdAt: {
      type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: DataTypes.NOW,
    } 
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};