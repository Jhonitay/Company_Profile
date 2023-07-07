const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contacts.init({
    contacts_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "contacts_id",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "email",
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone_number",
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "message",
    },
  }, {
    sequelize,
    modelName: 'contacts',
  });
  return Contacts;
};