const CatchAsync = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((e) => {
    console.log("Internal server error");
    next(e);
  });
};

module.exports = CatchAsync;
