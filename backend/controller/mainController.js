const { Category } = require("../model/model");

const getMainPage = async function (req, res) {
  const categories = await Category.find();
  res.status(200).json(categories);
};

const getCategoryPage = async function (req, res) {
  const { name } = req.params;
  res.status(200).json(name);
};

module.exports = {
  getMainPage,
  getCategoryPage,
};
