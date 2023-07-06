const { Product } = require("../models");

const  getproduct = async (req, res) => {
  console.log("Request profile received!");
  const product = await Product.findOne({ where: { product_id: req.body.product_id } });
  if (!product) {
    const error = new Error("Product not found!");
    error.code = "404";
    error.status = "Product not found!";
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
    message: "Product found!",
    user: {
      id: product.product_id,
      name: product.name,
      dimensi: product.dimensi,
      berat : product.berat,
      stock : product.stock,
      jenis : product.jenis,
    },
  };
  console.log(response);
  return res.status(200).json(response);
};

module.exports = { getproduct } ;