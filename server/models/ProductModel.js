const mongoose = require("mongoose");
const Schame = mongoose.Schema;

const ProductType = {
  title: String,
  introduction: String,
  detail: String,
  cover: String,
  editTime: Date,
};

const ProductModel = mongoose.model("product", new Schame(ProductType));
module.exports = ProductModel;
