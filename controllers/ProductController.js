const Product = require("../models/ProductModel");
const slugify = require("slugify");

const addProduct = async (req, res) => {
  try {
    const findProduct = await Product.findOne({ name: req.body.nameProduct });
    if (findProduct) {
      return res.status(404).json("Product already axsist");
    } else {
      req.body.slug = slugify(req.body.nameProduct);
      const newCategory = await Product.create(req.body);
      const category = await newCategory.save();
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  addProduct,
};
