const { order } = require("../controller");
const express = require("express");

const router = express.Router();

router.post("/order", order)
