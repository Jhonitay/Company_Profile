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
      this.Account = User.belongsTo(models.Account, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "account_id",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });
    }
  }
  User.init({
    user_id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "user_id",
    },
    first_name: {
      type: DataTypes.STRING,
        allowNull: true,
        field: "first_name",
    },
    last_name: {
      type: DataTypes.STRING,
        allowNull: true,
        field: "last_name",
    },
    username: {
      type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        field: "username",
    },
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};