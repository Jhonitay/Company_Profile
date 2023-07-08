const { Contacts } = require("../models");

const  getContacts = async (req, res) => {
  console.log("Request profile received!");
  const contacts = await Contacts.findOne({ where: { name: req.body.name } });
  if (!contacts) {
    const error = new Error("Product not found!");
    error.code = "404";
    error.status = "Contact not found!";
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    return res.status(404).json(response);
  }
  const response = {
    code: "200",
    status: "OK",
    message: "Contact found!",
    contacts: {  
      name: contacts.name,
      email: contacts.email,
      phoneNumber: contacts.phoneNumber,
      message: contacts.message,
      },
  };
  console.log(response);
  return res.status(200).json(response);
};

module.exports = { getContacts } ;