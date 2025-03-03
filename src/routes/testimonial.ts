
import express from 'express';
import { createTestimonial, getTestimonial,  } from '../controllers/testimonial';
import upload from '../middlewares/upload';

const router = express.Router();

// Create testimonial
router.post('/', upload.array('mediaFiles', 10), createTestimonial);

// Get testimonials with pagination
router.get('/', getTestimonial);

export default router;
