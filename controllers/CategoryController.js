const Category = require("../models/CategoryModel");

const addCategory = async (req, res) => {
  try {
    const findCategory = await Category.findOne({ title: req.body.title });
    if (findCategory) {
      return res.status(404).json("Title already axsist");
    } else {
      const newCategory = await new Category({
        title: req.body.title,
        description: req.body.description,
      });
      const category = await newCategory.save();
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      {
        description: req?.body?.description,
      },
      { new: true }
    );
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllCategory,
  deleteCategory,
  updateCategory,
  addCategory,
};
