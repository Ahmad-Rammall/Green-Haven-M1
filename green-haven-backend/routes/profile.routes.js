const express = require("express");
const {
  updateProfile,
  getUser,
  followUser,
  updatePassword,
} = require("../controllers/profile.controllers");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/uploadImage.middleware");

const router = express.Router();

const multer = require("multer");
const path = require("path");

router.put(
  "/",
  upload.single("file"),
  uploadToCloudinary("green-haven/profile-pics"),
  updateProfile,
);
router.get("/:id", getUser);
router.put("/followOrUnfollow", followUser);
router.put("/password", updatePassword);

module.exports = router;
