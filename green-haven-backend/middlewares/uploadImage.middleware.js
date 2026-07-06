const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../configs/cloudinary.configs");

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadToCloudinary = (folder) => {
  return async (req, res, next) => {
    try {
      if (!req.file) return next();

      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder,
              resource_type: "image",
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await streamUpload();

      req.file.cloudinaryUrl = result.secure_url;
      req.file.cloudinaryPublicId = result.public_id;

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  upload,
  uploadToCloudinary,
};