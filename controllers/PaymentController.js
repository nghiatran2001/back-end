const Payment = require("../models/PaymentModel");

const addOrder = async (req, res) => {
  try {
    const orders = await Payment.create(req.body);
    const list = await orders.save();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAll = async (req, res) => {
  try {
    const getAll = await Payment.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    const getId = await Payment.findById(id);
    res.status(200).json(getId);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  addOrder,
  getAll,
  getId,
};
