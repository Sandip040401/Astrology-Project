import express from 'express';
import { generateHoroscope } from '../controllers/horoscopeController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/generate', auth, generateHoroscope);

export default router;
