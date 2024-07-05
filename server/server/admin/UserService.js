// const { upload } = require("../../controllers/admin/UserController");
const UserModel = require("../../models/UserModel");

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password,
    });
  },
  upload: async ({ _id, username, introduction, gender, avatar }) => {
    if (avatar) {
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
          avatar,
        }
      );
    } else {
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
        }
      );
    }
  },
  add: async ({ username, password, role, introduction, avatar, gender }) => {
    return UserModel.create({
      username,
      password,
      gender,
      introduction,
      avatar,
      role,
    });
  },
  list: async ({ id }) => {
    return id
      ? UserModel.find({ _id: id }, [
          "username",
          "role",
          "introduction",
          "password",
        ])
      : UserModel.find({}, [
          "username",
          "role",
          "introduction",
          "avatar",
          "gender",
        ]);
  },
  delList: async ({ _id }) => {
    return UserModel.deleteOne({ _id });
  },
  putList: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body);
  },
};

module.exports = UserService;
