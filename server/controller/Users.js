const { Account } = require("../models");

const getUsers = async (req, res) => {
  try {
    const account = await Account.findAll();
    res.json(account);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers };
