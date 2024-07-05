const NewsService = require("../../server/admin/NewsService");

const NewsController = {
  add: async (req, res) => {
    const cover = req.file ? `/newsUploads/${req.file.filename}` : "";
    const { title, content, category, ispublish } = req.body;
    //调用Service进行操作
    await NewsService.add({
      title,
      content,
      category: Number(category),
      ispublish: Number(ispublish),
      cover,
      editTime: new Date(),
    });
    res.send({
      ActionType: "OK",
    });
  },
  getList: async (req, res) => {
    const result = await NewsService.getList({ _id: req.params.id });
    res.send({
      ActionType: "OK",
      data: result,
    });
  },
  publish: async (req, res) => {
    const result = await NewsService.publish({
      // 取出参数并更新时间
      ...req.body,
      editTime: new Date(),
    });
    res.send({
      ActionType: "OK",
    });
  },
  delList: async (req, res) => {
    await NewsService.delList({ _id: req.params.id });
    res.send({
      ActionType: "OK",
    });
  },
  updateList: async (req, res) => {
    const cover = req.file ? `/newsUploads/${req.file.filename}` : "";
    const { title, content, category, ispublish, _id } = req.body;
    //调用Service进行操作
    await NewsService.updateList({
      _id,
      title,
      content,
      category: Number(category),
      ispublish: Number(ispublish),
      cover,
      editTime: new Date(),
    });
    res.send({
      ActionType: "OK",
    });
  },
};

module.exports = NewsController;
