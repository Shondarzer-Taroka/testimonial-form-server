"use strict";
// import { Request, Response } from 'express';
// import Testimonial, { ITestimonial } from '../models/testimonial';
// import { v2 as cloudinary } from 'cloudinary';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestimonial = exports.createTestimonial = void 0;
const testimonial_1 = __importDefault(require("../models/testimonial"));
const cloudinary_1 = require("cloudinary");
const createTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { packageId, bookingId, travelerName, country, citiesTravelled, duration, travelType, travelTag, accommodations, transportUsed, activities, demographics, language, socialMediaHandle, testimonial, mediaType, rating, dateOfTravel, favouriteExperience, suggestions, } = req.body;
        // Upload multiple files to Cloudinary
        const mediaUrls = [];
        if (req.files && Array.isArray(req.files)) {
            for (const file of req.files) {
                const result = yield cloudinary_1.v2.uploader.upload(file.path, {
                    resource_type: file.mimetype.startsWith('video') ? 'video' : 'image', // Set resource_type dynamically
                });
                mediaUrls.push(result.secure_url);
            }
        }
        const newTestimonial = new testimonial_1.default({
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
        yield newTestimonial.save();
        res.status(201).json(newTestimonial);
    }
    catch (error) {
        console.error('Error creating testimonial:', error);
        res.status(500).json({ message: 'Error creating testimonial', error });
    }
});
exports.createTestimonial = createTestimonial;
// import QueryString from 'query-string'; // Assuming you are using query-string package
const getTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    try {
        const { page = 1, limit = 9, // Set default limit to 9 per page
        search = "", travelType, accommodations, travelTag, language, destination, rating, duration, sort = "dateOfTravel", // Default sort by "dateOfTravel"
         } = req.query;
        console.log(req.query);
        let query = {};
        // Filtering based on query params
        if (travelType)
            query.travelType = travelType;
        if (accommodations)
            query.accommodations = accommodations;
        if (travelTag)
            query.travelTag = travelTag;
        if (language)
            query.language = language;
        if (destination)
            query.country = destination; // Assuming 'country' is stored as the destination
        if (rating)
            query.rating = { $gte: Number(rating) }; // Filter testimonials with rating equal or greater than the specified rating
        if (duration)
            query.duration = { $lte: Number(duration) }; // Filter based on duration
        // Search (Case-insensitive regex for traveler name and testimonial content)
        if (search) {
            query.$or = [
                { travelerName: { $regex: search, $options: "i" } },
                { testimonial: { $regex: search, $options: "i" } },
            ];
        }
        // Pagination & Sorting
        const sortBy = sort; // Typecast sort to string to avoid TypeScript error
        const testimonials = yield testimonial_1.default.find(query)
            .sort({ [sortBy]: -1 }) // Sorting by date or the provided field (descending order)
            .skip((Number(page) - 1) * Number(limit)) // Pagination logic
            .limit(Number(limit)); // Limit the number of results per page
        const total = yield testimonial_1.default.countDocuments(query); // Total count for pagination
        res.json({
            testimonials,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)), // Calculate total pages
        });
    }
    catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({ message: 'Error fetching testimonials', error });
    }
});
exports.getTestimonial = getTestimonial;
