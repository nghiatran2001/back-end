const Cart = require("../models/CartModel");
const Product = require("../models/ProductModel");

const addCart = async (req, res) => {
  try {
    const findProduct = await Cart.findOne({
      idProduct: req.body.idProduct,
    });
    if (findProduct) {
      return res.status(404).json("Product already axsist");
    } else {
      const newCart = await Cart.create(req.body);
      const cart = await newCart.save();
      res.status(200).json(cart);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getIdProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findById(id);
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getIdProduct, addCart, getAllCart };
