const User = require("../models/UserModel");

const getAllUser = async (req, res) => {
  try {
    const getAll = await User.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await User.findById(id);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { _id } = req.params.id;
  try {
    const user = await User.findOneAndUpdate(
      _id,
      {
        email: req?.body?.email,
        name: req?.body?.name,
        phone: req?.body?.phone,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { getAllUser, getAUser, deleteUser, updateUser };
