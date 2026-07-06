const express = require("express");
const {
  getAllUserPlants,
  addPlant,
  removePlant,
} = require("../controllers/garden.controllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/uploadImage.middleware");

router.get("/", getAllUserPlants);
router.post(
  "/",
  upload.single("file"),
  uploadToCloudinary("green-haven/garden-pics"),
  addPlant,
);
router.delete("/", removePlant);

module.exports = router;
