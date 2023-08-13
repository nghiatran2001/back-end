import { CategoryModel } from "../models/categories.js";
//POST//
export const createCategory = async (req, res) => {
  const { ...category } = req.body;
  const isExists = await CategoryModel.findOne(
    { nameCategory: category?.nameCategory },
    { _id: 0, nameCategory: 1 }
  );
  if (!isExists) {
    CategoryModel.create({ ...category }, (err) => {
      if (err) res.sendStatus(500);
      return res.send({ type: "Thêm thể loại thành công" });
    });
  } else {
    return res.status(400).send("Thể loại này đã tồn tại");
  }
};
//GET//
export const getCategory = async (req, res) => {
  try {
    const categoryList = await CategoryModel.find(
      {},
      {
        nameCategory: 1,
        _id: 1,
        description: 1,
      }
    );
    res.send(categoryList);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const getIdCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findOne(
      { _id: id },
      {
        nameCategory: 1,
        _id: 1,
        description: 1,
      }
    );
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
//DELETE//
export const removeCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoryModel.deleteOne({ id });
    if (result.deleteCount) {
      return res.send("Xóa thành công ");
    }
    res.status(400).send("Id này không tồn tại");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
//PUT//
export const updateCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          nameCategory: req.body.nameCategory,
          description: req.body.description,
        },
      }
    );
    res.send(category);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
