const Order = require("../models/OrderModel");

const addArray = async (req, res) => {
  try {
    const newProduct = await Order.create(req.body);
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const getEmail = await Order.find(
      { email: email },
      { disable: 1, orderArray: 1, email: 1 }
    );
    res.status(200).json(getEmail);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addArray,
  getEmail,
};
