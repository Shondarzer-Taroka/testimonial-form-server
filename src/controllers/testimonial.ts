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
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         resource_type: req.file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
//       });
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

//     await newTestimonial.save();
//     res.status(201).json(newTestimonial);
//   } catch (error) {
//     console.error('Error creating testimonial:', error);
//     res.status(500).json({ message: 'Error creating testimonial', error });
//   }
// };

















// // src/ controllers/testimonial.ts


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

//     // Upload multiple files to Cloudinary
//     const mediaUrls: string[] = [];
//     if (req.files && Array.isArray(req.files)) {
//       for (const file of req.files) {
//         const result = await cloudinary.uploader.upload(file.path, {
//           resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
//         });
//         mediaUrls.push(result.secure_url);
//       }
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
//       mediaUrls, // Store array of media URLs
//       rating,
//       dateOfTravel,
//       favouriteExperience,
//       suggestions,
//     });

//     await newTestimonial.save();
//     res.status(201).json(newTestimonial);
//   } catch (error) {
//     console.error('Error creating testimonial:', error);
//     res.status(500).json({ message: 'Error creating testimonial', error });
//   }
// };



// export const getTestimonial=async (req:Request,res:Response) => {
  
// }
















// // src/ controllers/testimonial.ts
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

    // Upload multiple files to Cloudinary
    const mediaUrls: string[] = [];
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
        });
        mediaUrls.push(result.secure_url);
      }
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
      mediaUrls, // Store array of media URLs
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




// import QueryString from 'query-string'; // Assuming you are using query-string package

export const getTestimonial = async (req: Request, res: Response): Promise<void> => {
  console.log();
  
  try {
    const {
      page = 1,
      limit = 9, // Set default limit to 9 per page
      search = "",
      travelType,
      accommodations,
      travelTag,
      language,
      destination,
      rating,
      duration,
      sort = "dateOfTravel", // Default sort by "dateOfTravel"
    } = req.query;

    let query: any = {};

    // Filtering based on query params
    if (travelType) query.travelType = travelType;
    if (accommodations) query.accommodations = accommodations;
    if (travelTag) query.travelTag = travelTag;
    if (language) query.language = language;
    if (destination) query.country = destination; // Assuming 'country' is stored as the destination
    if (rating) query.rating = { $gte: Number(rating) }; // Filter testimonials with rating equal or greater than the specified rating
    if (duration) query.duration = { $lte: Number(duration) }; // Filter based on duration

    // Search (Case-insensitive regex for traveler name and testimonial content)
    if (search) {
      query.$or = [
        { travelerName: { $regex: search, $options: "i" } },
        { testimonial: { $regex: search, $options: "i" } },
      ];
    }

    // Pagination & Sorting
    const sortBy = sort as string; // Typecast sort to string to avoid TypeScript error
    const testimonials = await Testimonial.find(query)
      .sort({ [sortBy]: -1 }) // Sorting by date or the provided field (descending order)
      .skip((Number(page) - 1) * Number(limit)) // Pagination logic
      .limit(Number(limit)); // Limit the number of results per page

    const total = await Testimonial.countDocuments(query); // Total count for pagination

    res.json({
      testimonials,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)), // Calculate total pages
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Error fetching testimonials', error });
  }
};
