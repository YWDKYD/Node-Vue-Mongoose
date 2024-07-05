const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsType = {
  title: String,
  content: String,
  category: Number, // 类别1 2 3
  cover: String,
  ispublish: Number, // 未发布，已发布
  editTime: Date, //角色
};
const NewsModel = mongoose.model("news", Schema(NewsType));
module.exports = NewsModel;
