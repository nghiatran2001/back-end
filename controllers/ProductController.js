const Product = require("../models/ProductModel");
const slugify = require("slugify");

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
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const getAProduct = await Product.findById(id);
    console.log(getAProduct);
    res.status(200).json(getAProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
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
