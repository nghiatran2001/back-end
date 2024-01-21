const Brand = require("../models/BrandModel");
const Product = require("../models/ProductModel");

const slugify = require("slugify");

const addBrand = async (req, res) => {
  try {
    const findBrand = await Brand.findOne({
      nameBrand: req.body.nameBrand,
    });
    if (findBrand) {
      return res.status(404).json("Brand already axsist");
    } else {
      req.body.slug = slugify(req.body.nameBrand);
      const newBrand = await Brand.create(req.body);
      const brand = await newBrand.save();
      res.status(200).json(brand);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllBrand = async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const getABrand = await Brand.findById(id);
    res.status(200).json(getABrand);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBrand = async (req, res) => {
  try {
    const brands = await Brand.findById(req.params.id);
    const products = await Product.find({
      nameBrand: brands.nameBrand,
    });
    if (products != "") {
      res.status(211).json("Delete Fail");
    } else {
      const brand = await Brand.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateBrand = async (req, res) => {
  try {
    const findBrand = await Brand.findOne({
      nameBrand: req.body.nameBrand,
    });
    if (findBrand) {
      return res.status(404).json("Brand already axsist");
    } else {
      const brand = await Brand.findOneAndUpdate(
        { _id: req.params.id },
        {
          nameBrand: req?.body?.nameBrand,
          description: req?.body?.description,
        },
        { new: true }
      );
      res.status(200).json(brand);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBrand,
  deleteBrand,
  updateBrand,
  addBrand,
  getBrand,
};
