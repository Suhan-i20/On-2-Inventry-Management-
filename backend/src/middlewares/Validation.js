const { validationResult } = require("express-validator");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const Validation = (req, res, next) => {
  try {
    console.debug("VALIDATING");
    const result = validationResult(req);
    console.debug("VALIDATION_RES", result);
    if (!result.isEmpty()) {
      throw new ApiError(httpStatus.BAD_REQUEST, result.array()[0].msg);
    }

    next();
  } catch (error) {
    console.error("VALIDATING_ERROR", error);
    next(error);
  }
};

module.exports = Validation;
