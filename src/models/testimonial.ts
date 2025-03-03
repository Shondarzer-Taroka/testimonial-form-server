



import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  packageId: string;
  bookingId: string;
  travelerName: string;
  country: string;
  citiesTravelled: string;
  duration: number;
  travelType: string;
  travelTag: string;
  accommodations: string;
  transportUsed: string;
  activities: string;
  demographics: string;
  language: string;
  socialMediaHandle: string;
  testimonial: string;
  mediaType: string;
  mediaUrls: string[]; // Array of media URLs
  rating: number;
  dateOfTravel: string;
  favouriteExperience: string;
  suggestions: string;
}

const testimonialSchema: Schema = new Schema({
  packageId: { type: String, required: true },
  bookingId: { type: String, required: true },
  travelerName: { type: String, required: true },
  country: { type: String, required: true },
  citiesTravelled: { type: String, required: true },
  duration: { type: Number, required: true },
  travelType: { type: String, required: true },
  travelTag: { type: String, required: true },
  accommodations: { type: String, required: true },
  transportUsed: { type: String, required: true },
  activities: { type: String, required: true },
  demographics: { type: String, required: true },
  language: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  testimonial: { type: String, required: true },
  mediaType: { type: String, required: true },
  mediaUrls: { type: [String], required: true }, // Array of strings
  rating: { type: Number, required: true },
  dateOfTravel: { type: String, required: true },
  favouriteExperience: { type: String, required: true },
  suggestions: { type: String, required: true },
});

export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema);