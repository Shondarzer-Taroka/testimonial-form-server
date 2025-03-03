"use strict";
// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
//   api_key: process.env.CLOUDINARY_API_KEY as string,
//   api_secret: process.env.CLOUDINARY_API_SECRET as string,
// });
// // Set up Cloudinary storage for Multer
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: (req, file) => {
//     return {
//       folder: 'testimonials',
//       resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
//       allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'mov'], // Allow both images and videos
//     };
//   },
// });
// const upload = multer({ storage });
// export default upload;
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
// Configure Cloudinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Set up Cloudinary storage for Multer
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => {
        return {
            folder: 'testimonials',
            resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
            allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'mov'], // Allow both images and videos
        };
    },
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
