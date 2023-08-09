import { CategoryModel } from "../models/categories.js";
//POST//
export const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const post = new CategoryModel(newPost);
    await post.save();
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
//GET//
export const getCategory = async (req, res) => {
  try {
    const posts = await CategoryModel.find();
    res.send(posts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
export const getIdCategory = async (req, res) => {
  try {
  } catch (error) {}
};
//DELETE//
export const removeCategory = async (req, res) => {
  try {
  } catch (error) {}
};
//PUT//
export const updateCategory = async (req, res) => {
  try {
    const updateProduct = req.body;
    const post = await CategoryModel.findOneAndUpdate(
      {
        _id: updateProduct._id,
      },
      updateProduct,
      { new: true }
    );
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
