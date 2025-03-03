"use strict";
// import mongoose, { Document, Schema } from 'mongoose';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// export interface ITestimonial extends Document {
//   packageId: string;
//   bookingId: string;
//   travelerName: string;
//   country: string;
//   citiesTravelled: string;
//   duration: number;
//   travelType: string;
//   travelTag: string;
//   accommodations: string;
//   transportUsed: string;
//   activities: string;
//   demographics: string;
//   language: string;
//   socialMediaHandle: string;
//   testimonial: string;
//   mediaType: string;
//   mediaUrl: string;
//   rating: number;
//   dateOfTravel: string;
//   favouriteExperience: string;
//   suggestions: string;
// }
// const testimonialSchema: Schema = new Schema({
//   packageId: { type: String, required: true },
//   bookingId: { type: String, required: true },
//   travelerName: { type: String, required: true },
//   country: { type: String, required: true },
//   citiesTravelled: { type: String, required: true },
//   duration: { type: Number, required: true },
//   travelType: { type: String, required: true },
//   travelTag: { type: String, required: true },
//   accommodations: { type: String, required: true },
//   transportUsed: { type: String, required: true },
//   activities: { type: String, required: true },
//   demographics: { type: String, required: true },
//   language: { type: String, required: true },
//   socialMediaHandle: { type: String, required: true },
//   testimonial: { type: String, required: true },
//   mediaType: { type: String, required: true },
//   mediaUrl: { type: String, required: true },
//   rating: { type: Number, required: true },
//   dateOfTravel: { type: String, required: true },
//   favouriteExperience: { type: String, required: true },
//   suggestions: { type: String, required: true },
// });
// export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema);
const mongoose_1 = __importStar(require("mongoose"));
const testimonialSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.default.model('Testimonial', testimonialSchema);
