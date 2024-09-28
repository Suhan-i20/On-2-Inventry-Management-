const httpStatus = require("http-status");
const AuthService = require("../services/Auth.service");
const CatchAsync = require("../utils/CatchAsync");

class AuthController {
  static RegisterUser = CatchAsync(async (req, res) => {
    console.debug("RegisterUser 1");
    const res_obj = await AuthService.RegisterUser(req.body);
    console.debug("RegisterUser Data", res_obj);
    res.status(httpStatus.CREATED).send(res_obj);
  });
  static LoginUser = CatchAsync(async (req, res) => {
    console.debug("LoginUser");
    const res_obj = await AuthService.LoginUser(req.body);
    console.debug("LoginUser", res_obj);
    res.status(httpStatus.OK).send(res_obj);
  });
  static ProfileController = CatchAsync(async (req, res) => {
    console.debug("User Profile");
    const res_obj = await AuthService.ProfileService(req.user);
    console.debug("User Profile".res_obj);
    res.status(httpStatus.OK).send(res_obj);
  });
}

module.exports = AuthController;
