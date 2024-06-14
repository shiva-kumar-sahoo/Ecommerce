const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  ratting: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
