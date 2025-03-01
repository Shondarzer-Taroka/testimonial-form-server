// import express from 'express';
// import { createTestimonial } from '../controllers/testimonial';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Create testimonial route
// router.post('/', upload.single('mediaFile'), createTestimonial);

// export default router;










import express from 'express';
import { createTestimonial } from '../controllers/testimonial';
import upload from '../middlewares/upload';

const router = express.Router();

// Create testimonial route
router.post('/', upload.single('mediaFile'), createTestimonial);

export default router;