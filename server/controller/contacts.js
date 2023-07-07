const {  Sequelize, Transaction } = require("sequelize");
const { Contacts } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const createcontacts = async (req, res) => {
  const sequelize = new Sequelize(db);
  
  try {
    const { name, email, phone_number, message } = req.body;

    const newComment = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Contacts.create(
          {
            name: name,
            email: email,
            phone_number: phone_number,
            message: message
          },
          { transaction: t }
        );
      }
    );
    const response = {
      code: 201,
      status: "Created",
      message: "You have been replied",
    };

    return res.status(201).json(response);
  } catch (error) {
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    console.log(error);
    return res.status(500).json(response);
  } finally {
    await sequelize.close();
  }
};

module.exports = { createcontacts };
