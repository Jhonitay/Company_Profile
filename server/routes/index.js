const express = require("express");
 const { getUsers } = require("../controller/Users.js");

const router = express.Router();

router.get("/users", getUsers);

module.exports = { router };
