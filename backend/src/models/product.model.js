const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: [String],
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date(),
      default: new Date(),
    },
  },
  { timeStamp: true }
);

const product = mongoose.model("product", productSchema);
module.exports = product;
