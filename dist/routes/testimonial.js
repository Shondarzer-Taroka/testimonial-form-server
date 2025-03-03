"use strict";
// import express from 'express';
// import { createTestimonial } from '../controllers/testimonial';
// import upload from '../middlewares/upload';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const testimonial_1 = require("../controllers/testimonial");
const upload_1 = __importDefault(require("../middlewares/upload"));
const router = express_1.default.Router();
// Create testimonial
router.post('/', upload_1.default.array('mediaFiles', 10), testimonial_1.createTestimonial);
// Get testimonials with pagination
router.get('/', testimonial_1.getTestimonial);
exports.default = router;
