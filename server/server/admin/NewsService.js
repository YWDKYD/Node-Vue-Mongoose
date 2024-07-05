const NewsModel = require("../../models/NewsModel");

const NewsService = {
  add: async ({ title, content, cover, ispublish, editTime, category }) => {
    // 数据库模型处理
    return NewsModel.create({
      title,
      content,
      cover,
      ispublish,
      editTime,
      category,
    });
  },
  getList: async ({ _id }) => {
    return _id ? NewsModel.find({ _id }) : NewsModel.find({});
  },
  publish: async ({ _id, ispublish, editTime }) => {
    return NewsModel.updateOne(
      {
        _id,
      },
      {
        ispublish,
        editTime,
      }
    );
  },
  delList: async ({ _id }) => {
    return NewsModel.deleteOne({ _id });
  },
  updateList: async ({
    title,
    content,
    category,
    ispublish,
    _id,
    cover,
    editTime,
  }) => {
    if (cover) {
      return NewsModel.updateOne(
        {
          _id,
        },
        { title, content, category, ispublish, cover, editTime }
      );
    } else {
      return NewsModel.updateOne(
        {
          _id,
        },
        { title, content, category, ispublish, editTime }
      );
    }
  },
};
module.exports = NewsService;
