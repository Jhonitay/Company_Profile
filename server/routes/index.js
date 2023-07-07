const express = require("express");
const { login } = require("../controller/login.js");
const { signup } = require("../controller/signup.js");
const { getproduct } = require("../controller/product.js");
const { createcontacts } = require("../controller/contacts.js");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/product", getproduct);
router.post("/contacts", createcontacts);


module.exports = { router };
