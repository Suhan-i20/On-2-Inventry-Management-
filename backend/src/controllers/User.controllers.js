const httpStatus = require("http-status");
const CatchAsync = require("../utils/CatchAsync");
const UserService = require("../services/User.service");

class UserController {
  static registerUser = CatchAsync(async (req, res) => {
    const res_obj = await UserService.registerUser(req.body);
    res.status(httpStatus.CREATED).json(res_obj);
  });

  static loginUser = CatchAsync(async (req, res) => {
    const res_obj = await UserService.loginUser(req.body);
    res.status(httpStatus.OK).json(res_obj);
  });

  static getUserProfile = CatchAsync(async (req, res) => {
    const res_obj = await UserService.getUserProfile(req.user.id);
    res.status(httpStatus.OK).json(res_obj);
  });

  static updateUserProfile = CatchAsync(async (req, res) => {
    const res_obj = await UserService.updateUserProfile(req.user.id, req.body);
    res.status(httpStatus.OK).json(res_obj);
  });
}

module.exports = UserController;
