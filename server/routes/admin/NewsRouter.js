var express = require("express");
var NewsRouter = express.Router();
const NewsController = require("../../controllers/admin/NewsController");
// 使用multer
const multer = require("multer");
const upload = multer({ dest: "public/newsUploads/" });

NewsRouter.post("/adminapi/news/add", upload.single("img"), NewsController.add);

NewsRouter.get("/adminapi/news/list", NewsController.getList);
NewsRouter.post(
  "/adminapi/news/list",
  upload.single("img"),
  NewsController.updateList
);
NewsRouter.get("/adminapi/news/list/:id", NewsController.getList);
NewsRouter.put("/adminapi/news/publish", NewsController.publish);
NewsRouter.delete("/adminapi/news/list/:id", NewsController.delList);
module.exports = NewsRouter;
