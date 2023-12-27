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
      { disable: 1, orderArray: 1, email: 1, total: 1 }
    );
    res.status(200).json(getEmail);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    console.log(req.body.order._id);
    const product = await Order.findOneAndUpdate(
      { _id: req.body.order._id },
      {
        disable: true,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addArray,
  getEmail,
  update,
};
