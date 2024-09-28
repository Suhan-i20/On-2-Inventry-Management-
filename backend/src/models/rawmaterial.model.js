const mongoose = require("mongoose");

const rawMaterialSchema = new mongoose.Schema(
  {
    materialName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("RawMaterial", rawMaterialSchema);
module.exports = model;

