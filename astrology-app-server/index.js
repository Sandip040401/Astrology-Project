// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import horoscopeRoutes from './routes/horoscopeRoutes.js'; // Import horoscope routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/horoscope', horoscopeRoutes); // Use horoscope routes

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
