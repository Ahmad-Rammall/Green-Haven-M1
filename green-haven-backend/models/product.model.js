const mongoose = require("mongoose");
const defaultImagesUrl = require("../defaultImagesUrl");

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    image: {
      type: String,
      default:defaultImagesUrl.product
    },
    name: {
      type: String,
      require: true,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
