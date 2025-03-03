





// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';

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


















import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

// Set up Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    return {
      folder: 'testimonials',
      resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
      allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'mov'], // Allow both images and videos
    };
  },
});

const upload = multer({ storage });

export default upload;