const {  Sequelize, Transaction } = require("sequelize");
const { Order } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const createOrder = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { productId, userId, jumlah, total } = req.body;

  try {
    const order = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Order.create(
          {
            productId: productId,
            userId: userId,
            jumlah: jumlah,
            total: total,
          },
          { transaction: t }
        );
      }
    );
    const response = {
      code: 201,
      status: "Created",
      message: "Order has been successfully created",
    };

    res.status(201).json(order);
  } catch (error) {
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    // console.log(response);

    return res.status(500).json(response);
  }
  finally {
    await sequelize.close;
  }
};

module.exports = { createOrder };
