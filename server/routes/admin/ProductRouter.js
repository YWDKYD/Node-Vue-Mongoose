var express = require("express");
var ProductRouter = express.Router();
const ProductController = require("../../controllers/admin/ProductController");
// 使用multer
const multer = require("multer");
const upload = multer({ dest: "public/productUploads/" });

ProductRouter.post(
  "/adminapi/product/add",
  upload.single("img"),
  ProductController.add
);

ProductRouter.get("/adminapi/product/list", ProductController.getList);
ProductRouter.post(
  "/adminapi/product/list",
  upload.single("img"),
  ProductController.updateList
);
ProductRouter.get("/adminapi/product/list/:id", ProductController.getList);
// NewsRouter.put("/adminapi/news/publish", NewsController.publish);
ProductRouter.delete("/adminapi/product/list/:id", ProductController.delList);
module.exports = ProductRouter;
