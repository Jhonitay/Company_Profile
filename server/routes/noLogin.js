const express = require("express");
const { login, signup, getProduct } = require("../controller");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/order", getProduct);

module.exports = { router };
