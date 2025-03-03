"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const testimonial_1 = __importDefault(require("./routes/testimonial"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'https://testimonialfrontend.vercel.app'],
    credentials: true, // Allow cookies to be sent
}));
app.use((0, cookie_parser_1.default)()); // Use cookie-parser to handle cookies
(0, db_1.default)();
// // routes
// Routes
app.use('/api/testimonials', testimonial_1.default);
// // middleware
exports.default = app;
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db';
// import testimonialRoutes from './routes/testimonial';
// dotenv.config();
// export const app = express();
// // Middleware
// app.use(cors());
// app.use(express.json());
// // Connect to MongoDB
// connectDB();
// // Routes
// app.use('/api/testimonials', testimonialRoutes);
