const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 创建user模型 => users集合
const UserType = {
  username: String,
  password: String,
  gender: Number, // 0,1,2
  introduction: String, // 简介
  avatar: String,
  role: Number, // 管理员1 ,编辑2
};
const UserModel = mongoose.model("user", new Schema(UserType));
module.exports = UserModel;
