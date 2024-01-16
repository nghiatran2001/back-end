const Product = require("../models/ProductModel");
const Cart = require("../models/CartModel");
const slugify = require("slugify");
const page_size = 4;

const addProduct = async (req, res) => {
  try {
    const findProduct = await Product.findOne({
      nameProduct: req.body.nameProduct,
    });
    if (findProduct) {
      return res.status(404).json("Product already axsist");
    } else {
      req.body.slug = slugify(req.body.nameProduct);
      const newProduct = await Product.create(req.body);
      const product = await newProduct.save();
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProduct = async (req, res) => {
  var page = req.query.page;
  if (page) {
    try {
      page = parseInt(page);
      if (page < 1) {
        page = 1;
      }
      var nextPage = (page - 1) * page_size;
      const product = await Product.find().skip(nextPage).limit(page_size);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const getAProduct = await Product.findById(id);
    res.status(200).json(getAProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const carts = await Cart.find({ idProduct: product._id });
    if (carts != "") {
      res.status(211).json("Delete Fail");
    } else {
      const product1 = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        nameProduct: req?.body?.nameProduct,
        slug: slugify(req?.body?.nameProduct),
        nameCategory: req?.body?.nameCategory,
        nameBrand: req?.body?.nameBrand,
        quantity: req?.body?.quantity,
        originPrice: req?.body?.originPrice,
        sellPrice: req?.body?.sellPrice,
        description: req?.body?.description,
        disable: req?.body?.disable,
        image: req?.body?.image,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
