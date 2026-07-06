const express = require("express");
const {
  getAllSellerProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
  getAllProducts,
} = require("../controllers/product.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const sellerMiddleware = require("../middlewares/seller.middleware");
const { upload, uploadToCloudinary } = require("../middlewares/uploadImage.middleware");

router.get("/", getAllProducts);
router.get("/seller", getAllSellerProducts);

router.post(
  "/",
  sellerMiddleware,
  upload.single("file"),
  uploadToCloudinary("green-haven/products-pics"),
  addProduct,
);

router.put(
  "/",
  sellerMiddleware,
  upload.single("file"),
  uploadToCloudinary("green-haven/products-pics"),
  updateProduct,
);

router.delete("/:id", sellerMiddleware, deleteProduct);
router.get("/:id", getOneProduct);

module.exports = router;
