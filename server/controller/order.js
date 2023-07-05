const { User, Product } = require ("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const order = async (req, res) => {
    
}