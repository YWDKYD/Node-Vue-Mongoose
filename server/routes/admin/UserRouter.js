var express = require("express");
const UserController = require("../../controllers/admin/UserController");
var UserRouter = express.Router();
// 使用multer
const multer = require("multer");
const upload = multer({ dest: "public/avatarUploads/" });

UserRouter.post("/adminapi/user/login", UserController.login);
UserRouter.post(
  "/adminapi/user/upload",
  upload.single("img"),
  UserController.upload
);

UserRouter.post("/adminapi/user/add", upload.single("img"), UserController.add);

// 用户列表的增删改操作
UserRouter.get("/adminapi/user/list", UserController.getList);
UserRouter.get("/adminapi/user/list/:id", UserController.getList);
UserRouter.delete("/adminapi/user/list/:id", UserController.delete);
UserRouter.put("/adminapi/user/list/:id", UserController.putList);
module.exports = UserRouter;
