const httpStatus = require("http-status");

const Authorization = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(httpStatus.FORBIDDEN).json({ message: "Access Denied" });
  }
  next();
};

module.exports = Authorization;
