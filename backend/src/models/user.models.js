const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "worker", "manager", "consumer"], 
      required: true,
    },
    address: {
      type: String,  // Specific to customers/consumers
    },
    phoneNumber: {
      type: String,  // Specific to customers/consumers
    },
  },
  { timestamps: true }
);

const model = mongoose.model("User", userSchema);
module.exports = model;

