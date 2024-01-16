const Cart = require("../models/CartModel");
const Product = require("../models/ProductModel");

const addCart = async (req, res) => {
  try {
    const findProduct = await Cart.findOne({
      idProduct: req.body.idProduct,
      email: req.body.email,
      disable: false,
    });
    if (findProduct) {
      return res.status(404).json("Product already axsist in Cart");
    } else {
      const newCart = await Cart.create(req.body);
      const cart = await newCart.save();
      res.status(200).json(cart);
    }
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

const getEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const carts = await Cart.find(
      { email: email },
      { idProduct: 1, email: 1, quantity: 1, disable: 1 }
    );
    const idProduct = carts.map((e) => e.idProduct);
    const prouducts = await Product.find(
      { _id: idProduct },
      { nameProduct: 1, image: 1, sellPrice: 1, quantity: 1 }
    );
    const finalData = carts.map((cart) => {
      prouducts.some((product) => {
        if (product._id.toString() === cart.idProduct) {
          cart._doc.nameProduct = product.nameProduct;
          cart._doc.image = product.image;
          cart._doc.sellPrice = product.sellPrice;
          cart._doc.amount = product.quantity;
          return true;
        }
        return false;
      });
      return cart;
    });
    res.send(finalData);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.body.cart._id },
      {
        disable: true,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateQuantity = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.body.cart._id },
      {
        quantity: req?.body?.cart?.quantity + 1,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateQuantityTru = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.body.cart._id },
      {
        quantity: req?.body?.cart?.quantity - 1,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addCart,
  getAllCart,
  getEmail,
  deleteProduct,
  update,
  updateQuantity,
  updateQuantityTru,
};
