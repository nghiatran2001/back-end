import { ProductDetailModel } from "../models/productDetail.js";

//POST//
export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const post = new ProductDetailModel(newPost);
    await post.save();
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
//GET//
export const getProductDetail = async (req, res) => {
  try {
    const posts = await ProductDetailModel.find();
    res.send(posts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export const getIdProductDetail = async (req, res) => {
  try {
  } catch (error) {}
};
//DELETE//
export const removeProductDetail = async (req, res) => {
  try {
  } catch (error) {}
};
//PUT//
export const updateProductDetail = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await ProductDetailModel.findOneAndUpdate(
      {
        _id: updatePost._id,
      },
      updatePost,
      { new: true }
    );
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
