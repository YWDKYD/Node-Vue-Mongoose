const UserService = require("../../server/admin/UserService");
const JWT = require("../../util/JWT");

const UserController = {
  login: async (req, res) => {
    var result = await UserService.login(req.body);
    if (result.length === 0) {
      res.send({
        code: "-1",
        error: "用户名或密码错误",
      });
    } else {
      const token = JWT.generate(
        {
          _id: result[0]._id,
          username: result[0].username,
        },
        "1d"
      );
      res.header("Authorization", token);
      res.send({
        ActionType: "OK",
        data: {
          username: result[0].username,
          gender: result[0].gender ? result[0].gender : 0, // 0,1,2
          introduction: result[0].introduction, // 简介
          avatar: result[0].avatar,
          role: result[0].role, // 管理员1 ,编辑2
        },
      });
    }
  },
  upload: async (req, res) => {
    // console.log(req.body, req.file); //打印的前端传递的表单数据，包括图片
    // 调用server模块更新
    const { username, introduction, gender } = req.body;
    const token = req.headers["authorization"].split(" ")[1];
    var payload = JWT.verify(token);
    // 若是用户不更新头像，此处需要加判断
    const avatar = req.file ? `/avatarUploads/${req.file.filename}` : "";

    await UserService.upload({
      _id: payload._id,
      username,
      introduction,
      gender: Number(gender),
      avatar,
    });
    if (avatar) {
      res.send({
        ActionType: "OK",
        data: {
          username,
          introduction,
          gender: Number(gender),
          avatar,
        },
      });
    } else {
      res.send({
        ActionType: "OK",
        data: {
          username,
          introduction,
          gender: Number(gender),
        },
      });
    }
  },
  add: async (req, res) => {
    // console.log(req.body, req.file); //打印的前端传递的表单数据，包括图片
    // 调用server模块更新
    const { username, introduction, gender, role, password } = req.body;

    const avatar = req.file ? `/avatarUploads/${req.file.filename}` : "";
    await UserService.add({
      username,
      password,
      role: Number(role),
      introduction,
      avatar,
      gender: Number(gender),
    });
    res.send({
      ActionType: "OK",
    });
  },
  getList: async (req, res) => {
    const result = await UserService.list(req.params);
    res.send({
      ActionType: "OK",
      data: result,
    });
  },
  delete: async (req, res) => {
    // console.log(req.params.id);
    const result = await UserService.delList({ _id: req.params.id });
    res.send({
      ActionType: "OK",
    });
  },
  putList: async (req, res) => {
    const result = await UserService.putList(req.body);
    res.send({
      ActionType: "OK",
    });
  },
};
module.exports = UserController;
