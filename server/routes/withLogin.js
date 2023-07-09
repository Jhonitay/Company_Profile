const { createcontacts } = require("../controller/contacts");
const { getContacts } = require("../controller/getContacts");
const { getProduct } = require("../controller/getProduct");
const { createOrder } = require("../controller/order");
const { signup } = require("../controller/signup");
const express = require("express");
const router = express.Router();

router.post("/contacts", createcontacts);
router.post("/getcontacts", getContacts);
router.post("/getproduct", getProduct);
router.post("/createorder", createOrder);
router.post("/signup", signup);



module.exports = router;