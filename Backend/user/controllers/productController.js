const Product = require("../../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products)
      return res
        .status(404)
        .json({ error: "Error", message: "Product not found" });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ error: "Error", message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Error", message: err });
  }
};

const getProductBySearch = async (req, res) => {
  try {
    const products = await Product.find({
      name: { $regex: req.query.q, $options: "i" },
    });
    if (!products)
      return res
        .status(404)
        .json({ error: "Error", message: "Product not found" });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      categories: { $regex: req.params.category, $options: "i" },
    });
    if (!products)
      return res
        .status(404)
        .json({ error: "Error", message: "Product not found" });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductBySearch,
  getProductByCategory,
};
