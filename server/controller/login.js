const { Sequelize, ValidationError } = require("sequelize");
const jsonwebtoken = require("jsonwebtoken");
const { Account } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const login = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { email, password } = req.body;
  try {
    const account = await Account.findOne({ where: { email: email } , attributes: ['email', 'password']});
    if (!account) {
      throw new ValidationError("Account does not exist");

    }
    const inputAccount = {
      email: email,
      password: password,
    };
    const { error: accError } = Account.validate(inputAccount); 
    if (accError) {
      throw new ValidationError(accError.details[0].message);
    }
    const token = jsonwebtoken.sign(
      { id: account.account_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("EF_TOKEN_ID", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    const response = {
      code: 200,
      message: "Login successful",
    };
    console.log(response);

    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.code = 400;
      error.status = "Bad Request";
    }
    const response = {
      code: error.code,
      message: error.message,
    };
    console.log(response);
    return res.status(response.code).json(response);

  } finally {
    await sequelize.close();
  }
};

module.exports = { login };