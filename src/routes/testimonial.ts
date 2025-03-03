





// import express from 'express';
// import { createTestimonial } from '../controllers/testimonial';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Create testimonial route
// router.post('/', upload.single('mediaFile'), createTestimonial);

// export default router;

















// // // src/route/testimonial.ts

// import express from 'express';
// import { createTestimonial } from '../controllers/testimonial';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Create testimonial route with multiple file uploads
// router.post('/', upload.array('mediaFiles', 10), createTestimonial); // Allow up to 10 files

// export default router;













import express from 'express';
import { createTestimonial, getTestimonial,  } from '../controllers/testimonial';
import upload from '../middlewares/upload';

const router = express.Router();

// Create testimonial
router.post('/', upload.array('mediaFiles', 10), createTestimonial);

// Get testimonials with pagination
router.get('/', getTestimonial);

export default router;
