import { ProductModel } from "../models/product.js";
//POST//
export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const post = new ProductModel(newPost);
    await post.save();
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
//GET//
export const getProducts = async (req, res) => {
  try {
    const posts = await ProductModel.find();
    res.send(posts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
export const getIdProduct = async (req, res) => {
  try {
  } catch (error) {}
};
//DELETE//
export const removeProduct = async (req, res) => {
  try {
  } catch (error) {}
};
//PUT//
export const updateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;
    const post = await ProductModel.findOneAndUpdate(
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
