const express = require("express");
const { login } = require("../controller/login.js");
const { signup } = require("../controller/signup.js");
const { getproduct } = require("../controller/product.js");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/product", getproduct);

module.exports = { router };
