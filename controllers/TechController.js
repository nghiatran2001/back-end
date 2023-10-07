const Product = require("../models/TechModel");

const addTech = async (req, res) => {
  try {
    const findProduct = await Product.findOne({
      idProduct: req.body.idProduct,
    });
    if (findProduct) {
      return res.status(404).json("This idProduct already axsist tech");
    } else {
      const newProduct = await Product.create(req.body);
      const product = await newProduct.save();
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addTech,
};
