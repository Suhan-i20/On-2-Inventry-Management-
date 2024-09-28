const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const ApiError = require("./utils/ApiError");
const ErrorHandling = require("./middlewares/ErrorHandler");
const { ConnectDB } = require("./config/db.config");

const app = express();

ConnectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes"));
app.use("/api/v1", require("./routes"));
app.use("/api/v1", require("./routes"));

app.use("*", (req, res) => {
  console.debug("GLOBAL_ERROR_HANDLER");
  throw new ApiError(404, "page not found");
});

app.use(ErrorHandling);

module.exports = app;
