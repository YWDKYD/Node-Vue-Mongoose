const ProductService = require("../../server/admin/ProductService");

const ProductController = {
  add: async (req, res) => {
    // console.log(req.body, req.file); //打印的前端传递的表单数据，包括图片
    // 调用server模块更新
    const cover = req.file ? `/productUploads/${req.file.filename}` : "";
    const { title, introduction, detail } = req.body;
    await ProductService.add({
      title,
      introduction,
      detail,
      cover,
      editTime: new Date(),
    });
    res.send({
      ActionType: "OK",
    });
  },
  getList: async (req, res) => {
    const data = await ProductService.getList({ _id: req.params.id });
    res.send({
      ActionType: "OK",
      data: data,
    });
  },
  delList: async (req, res) => {
    await ProductService.delList({ _id: req.params.id });
    res.send({ ActionType: "OK" });
  },
  updateList: async (req, res) => {
    console.log(req.body);
    const cover = req.file ? `/productUploads/${req.file.filename} ` : "";
    const { _id, title, introduction, detail } = req.body;
    await ProductService.updateList({
      _id,
      title,
      introduction,
      detail,
      cover,
      editTime: new Date(),
    });
    res.send({
      ActionType: "OK",
    });
  },
};
module.exports = ProductController;
