import express from 'express';
import { checkCompatibility } from '../controllers/compatibilityController.js';

const router = express.Router();

// Route to get compatibility
router.get('/check/:sign1/:sign2', checkCompatibility);

export default router;
