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
    }
  }
  User.init({
    User_id: DataTypes.UUID,
    First_name: DataTypes.STRING,
    Last_name: DataTypes.STRING,
    Username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};