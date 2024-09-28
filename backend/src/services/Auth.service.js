const httpStatus = require("http-status");
const { UserModel, ProfileModel } = require("../models");
const ApiError = require("../utils/ApiError");
const { generatoken } = require("../utils/Token.utils");
const axios = require("axios");
class AuthService {
  static async RegisterUser(body) {
    const { email, password, name, token } = body;

    console.log("1---- ", token);

    // const response = await axios.post(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {},
    //   {
    //     params: {
    //       secret: process.env.CAPTCHA_SCREATE_KEY,
    //       response: token,
    //     },
    //   }
    // );

    // const data = await response.data;
    // console.log("2---- ", JSON.stringify(data));

    // if (!data.success) {
    //   console.log("yhhh it works");

    //   throw new ApiError(httpStatus.BAD_REQUEST, "Captcha Not Valid");
    // }

    const checkExist = await UserModel.findOne({ email });
    console.log("checkExits", checkExist);
    if (checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Alrady Regisrered");
    }

    const user = await UserModel.create({
      email,
      password,
      username: name,
      role: "consumer",
    });

    const tokend = generatoken(user);
    const refresh_token = generatoken(user, "2d");
    const newProfile = await ProfileModel.create({
      user: user._id,
      refresh_token,
    });

    console.log(newProfile);

    return {
      msg: "User Register Successflly",
      token: tokend,
    };
  }

  static async LoginUser(body) {
    const { email, password, name, token } = body;

    // const response = await axios.post(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {},
    //   {
    //     params: {
    //       secret: process.env.CAPTCHA_SCREATE_KEY,
    //       response: token,
    //     },
    //   }
    // );

    // const data = await response.data;
    // console.log("2---- ", JSON.stringify(data));

    // if (!data.success) {
    //   console.log("yhhh it works");

    //   throw new ApiError(httpStatus.BAD_REQUEST, "Captcha Not Valid");
    // }

    const checkExist = await UserModel.findOne({ email });
    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Regisrered");
    }

    if (password !== checkExist.password) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Credentials");
    }

    const tokend = generatoken(checkExist);

    return {
      msg: "User Login Successflly",
      token: tokend,
    };
  }

  static async ProfileService(user) {
    const checkExist = await UserModel.findById(user).select("name email");
    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Regisrered");
    }

    return {
      msg: "Data fetched",
      user: checkExist,
    };
  }
}

module.exports = AuthService;
