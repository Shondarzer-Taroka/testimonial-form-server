import express, { Router } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import cookieParser from 'cookie-parser';  
import testimonialRoutes from './routes/testimonial';

const app= express()

app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:5173','https://testimonialfrontend.vercel.app' ], 
       
        
        credentials: true, // Allow cookies to be sent
    }
))
app.use(cookieParser()); // Use cookie-parser to handle cookies
connectDB()
// // routes
// Routes
app.use('/api/testimonials', testimonialRoutes);

// // middleware


export default app








