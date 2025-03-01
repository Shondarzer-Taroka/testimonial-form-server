// import { Request, Response } from 'express';
// import Testimonial, { ITestimonial } from '../models/testimonial';
// import { v2 as cloudinary } from 'cloudinary';

// export const createTestimonial = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const {
//       packageId,
//       bookingId,
//       travelerName,
//       country,
//       citiesTravelled,
//       duration,
//       travelType,
//       travelTag,
//       accommodations,
//       transportUsed,
//       activities,
//       demographics,
//       language,
//       socialMediaHandle,
//       testimonial,
//       mediaType,
//       rating,
//       dateOfTravel,
//       favouriteExperience,
//       suggestions,
//     } = req.body;

//     let mediaUrl = '';
//     if (req.file) {
//       // Upload file to Cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path);
//       mediaUrl = result.secure_url;
//     }

//     const newTestimonial: ITestimonial = new Testimonial({
//       packageId,
//       bookingId,
//       travelerName,
//       country,
//       citiesTravelled,
//       duration,
//       travelType,
//       travelTag,
//       accommodations,
//       transportUsed,
//       activities,
//       demographics,
//       language,
//       socialMediaHandle,
//       testimonial,
//       mediaType,
//       mediaUrl,
//       rating,
//       dateOfTravel,
//       favouriteExperience,
//       suggestions,
//     });

//     console.log(newTestimonial);
    
//     await newTestimonial.save();
//     res.status(201).json(newTestimonial);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating testimonial', error });
//   }
// };


















import { Request, Response } from 'express';
import Testimonial, { ITestimonial } from '../models/testimonial';
import { v2 as cloudinary } from 'cloudinary';

export const createTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      packageId,
      bookingId,
      travelerName,
      country,
      citiesTravelled,
      duration,
      travelType,
      travelTag,
      accommodations,
      transportUsed,
      activities,
      demographics,
      language,
      socialMediaHandle,
      testimonial,
      mediaType,
      rating,
      dateOfTravel,
      favouriteExperience,
      suggestions,
    } = req.body;

    let mediaUrl = '';
    if (req.file) {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: req.file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
      });
      mediaUrl = result.secure_url;
    }

    const newTestimonial: ITestimonial = new Testimonial({
      packageId,
      bookingId,
      travelerName,
      country,
      citiesTravelled,
      duration,
      travelType,
      travelTag,
      accommodations,
      transportUsed,
      activities,
      demographics,
      language,
      socialMediaHandle,
      testimonial,
      mediaType,
      mediaUrl,
      rating,
      dateOfTravel,
      favouriteExperience,
      suggestions,
    });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({ message: 'Error creating testimonial', error });
  }
};