const express = require("express");
const {
  getFollowingPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
  likePost,
  addComment,
  updateComment,
  deleteComment,
  likeComment,
} = require("../controllers/post.controllers");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/uploadImage.middleware");

const router = express.Router();
const multer = require("multer");
const path = require("path");

router.get("/", getFollowingPosts);
router.post(
  "/",
  upload.single("file"),
  uploadToCloudinary("green-haven/posts-pics"),
  addPost,
);
router.put("/", updatePost);
router.delete("/", deletePost);
router.get("/:userId", getUserPosts);
router.put("/like", likePost);
router.post("/comment", addComment);
router.put("/comment", updateComment);
router.delete("/comment", deleteComment);
router.put("/comment/like", likeComment);

module.exports = router;
