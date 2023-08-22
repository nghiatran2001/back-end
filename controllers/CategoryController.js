const Category = require("../models/CategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
//Create a cateogry
const createCateogry = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const findName = await Category.findOne({ name: name });
  if (!findName) {
    //create a new Category
    const newName = await Category.create(req.body);
    res.json(newName);
  } else {
    throw new Error("Category already exists");
  }
});

//Get all cateogrys
const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getCategorys = await Category.find();
    res.json(getCategorys);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a category
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCategory = await Category.findById(id);
    res.json({
      getCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.json({
      deleteCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Update a category
// const updateCateogry = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateMongoDbId(id);
//   try {
//     const updateCateogry = await Cateogry.findByIdAndUpdate(
//       id,
//       {
//         name: req?.body?.name,
//       },
//       {
//         new: true,
//       }
//     );
//     res.json(updateCateogry);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

module.exports = {
  createCateogry,
  getAllCategory,
  getCategory,
  deleteCategory,
};
